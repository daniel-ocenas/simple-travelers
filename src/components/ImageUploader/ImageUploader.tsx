import Image from 'next/image';
import React, { ChangeEvent, useState } from 'react';
import { Flex, Text } from 'src/UI';

type FileUploaderProps = {
  endpoint: string;
  multiple?: boolean;
  accept?: string;
  onSuccess?: (filename: string | string[]) => void;
  onError?: (error: string) => void;
};

const FileUploader: React.FC<FileUploaderProps> = ({
  endpoint,
  multiple = false,
  accept = '*',
  onSuccess,
  onError,
}) => {
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [status, setStatus] = useState<string>('');

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const fileList = Array.from(files);

    // Preview
    setPreviewUrls(fileList.map((file) => URL.createObjectURL(file)));

    const formData = new FormData();
    fileList.forEach((file) => formData.append('image', file)); // 'image' must match your API handler

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        body: formData,
      });

      const result = await res.json();

      if (res.ok) {
        setStatus('Upload successful');
        if (onSuccess) onSuccess(result.filename || result.filenames);
      } else {
        setStatus('Upload failed');
        if (onError) onError(result.error || 'Unknown error');
      }
    } catch (err: any) {
      setStatus('Upload error');
      if (onError) onError(err.message);
    }
  };

  return (
    <Flex direction={'column'}>
      <input type="file" accept={accept} multiple={multiple} onChange={handleFileChange} className="mb-2" />
      <Flex direction={'row'}>
        {previewUrls.map((url, idx) => (
          <Image key={idx} width={300} height={300} src={url} alt={`Preview ${idx}`} />
        ))}
      </Flex>
      <Text>{status}</Text>
    </Flex>
  );
};

export default FileUploader;
