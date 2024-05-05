import { Buffer } from 'buffer';
import { writeFile } from 'fs/promises';
import { NextResponse } from 'next/server';
import path from 'path';

export default async function handler(req: any, res: any) {
  const formData = await req.body;

  const file = formData.get('file');
  if (!file) {
    return NextResponse.json({ error: 'No files received.' }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = file.name.replaceAll(' ', '_');
  console.log(filename);
  try {
    await writeFile(path.join(process.cwd(), 'public/static/uploaded/' + filename), buffer);

    return NextResponse.json({ Message: 'Success', status: 201 });
  } catch (error) {
    console.log('Error occured ', error);
    return NextResponse.json({ Message: 'Failed', status: 500 });
  }
}
