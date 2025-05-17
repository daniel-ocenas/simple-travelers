import { IncomingForm } from 'formidable';
import fs from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadDir = path.join(process.cwd(), '/public/uploads');
fs.mkdirSync(uploadDir, { recursive: true });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const form = new IncomingForm({ uploadDir, keepExtensions: true });

  form.parse(req, (err, fields, files) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'File upload failed' });
    }

    const fileData = files.image;

    if (!fileData) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const uploadedFile = Array.isArray(fileData) ? fileData[0] : fileData;
    const originalName = uploadedFile.originalFilename || 'uploaded_file';
    const safeFilename = originalName.replace(/[^a-z0-9.\-_]/gi, '_');
    const originalPath = path.join(uploadDir, safeFilename);

    try {
      // Try to move the file with original name
      fs.renameSync(uploadedFile.filepath, originalPath);
      return res.status(200).json({ message: 'Upload successful', filename: safeFilename });
    } catch (renameError) {
      console.warn('Original name failed, falling back to generated name:', renameError);

      // Fallback: generate a unique name
      const ext = path.extname(originalName);
      const generatedFilename = `${uuidv4()}${ext}`;
      const fallbackPath = path.join(uploadDir, generatedFilename);

      try {
        fs.renameSync(uploadedFile.filepath, fallbackPath);
        return res.status(200).json({ message: 'Upload successful with fallback name', filename: generatedFilename });
      } catch (secondError) {
        console.error('Fallback rename also failed:', secondError);
        return res.status(500).json({ error: 'Failed to save file' });
      }
    }
  });
}
