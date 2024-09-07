import React, { useState } from 'react';
import { Flex } from 'UI/Flex';
import { MarginBox } from 'UI/MarginBox';

const EditableImageComponent = () => {
  const [file, setFile] = useState<File | undefined>(undefined);
  // const uploadFile = (file: UploadFile) => {
  //   console.log(file);
  //   const formData = new FormData();
  //   formData.append('file', file.originFileObj ?? '');
  //   console.log(formData);
  //   fetch('/api/image', {
  //     method: 'POST',
  //     body: formData,
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.error(error));
  // };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) {
      return;
    }
    const data = new FormData();
    data.set('file', file);
    const res = await fetch('/api/image', {
      method: 'POST',
      body: data,
    });

    try {
      const result = await res.json();
      if (result.ok) {
        console.error('The file was uploaded successfully');
      } else {
        console.error('The file was not uploaded');
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Flex background={'white'}>
      <MarginBox mx={8} my={8}>
        {/*<Upload*/}
        {/*  listType={'picture'}*/}
        {/*  maxCount={2}*/}
        {/*  multiple*/}
        {/*  onRemove={(file) => {*/}
        {/*    const index = fileList.indexOf(file);*/}
        {/*    const newFileList = fileList.slice();*/}
        {/*    newFileList.splice(index, 1);*/}
        {/*    setFileList(newFileList);*/}
        {/*  }}*/}
        {/*  beforeUpload={(file, fileList) => {*/}
        {/*    setFileList([...fileList]);*/}
        {/*    return false;*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <Button icon={<UploadOutlined />}>Upload (Max: 2)</Button>*/}
        {/*</Upload>*/}
        <form onSubmit={onSubmit}>
          <input type={'file'} name={'file'} onChange={(e) => setFile(e.target.files?.[0])} />
          <button type={'submit'} value="Submit">
            Submit
          </button>
        </form>
      </MarginBox>
    </Flex>
  );
};

export default EditableImageComponent;
