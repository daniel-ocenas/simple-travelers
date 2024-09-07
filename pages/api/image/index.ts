import { writeFile } from 'fs/promises';
import { NextRequest, NextResponse } from 'next/server';
import path from 'path';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '8mb', // Set desired value here
    },
  },
  runtime: 'edge',
};

export default async function Post(req: NextRequest, res: any) {
  const formData = await req.formData();

  const file = formData.get('file');
  if (!file) {
    return NextResponse.json({ error: 'No files received.' }, { status: 400 });
  }

  // @ts-ignore
  if ('arrayBuffer' in file) {
    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = Date.now() + file.name.replaceAll(' ', '_');
    console.log(filename);
    try {
      await writeFile(path.join(process.cwd(), 'public/uploads/' + filename), buffer);
      return NextResponse.json({ Message: 'Success', status: 201 });
    } catch (error) {
      console.log('Error occured ', error);
      return NextResponse.json({ Message: 'Failed', status: 500 });
    }
  }
}

//   try {
//     const filename = file.name.replaceAll(' ', '_');
//     const bytes = await file.arrayBuffer();
//     const buffer = Buffer.from(bytes);
//     const writePath = path.join(process.cwd(), 'public/static/uploaded/' + filename);
//     console.log(writePath);
//     await writeFile(writePath, buffer);
//
//     console.log(`See ${writePath} to preview the uploaded file`);
//
//     res.status(200).json({ message: 'File uploaded successfully.', url: writePath });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Error uploading the file.' });
//   }
// });
