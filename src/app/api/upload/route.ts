import { NextResponse } from 'next/server';

import { isAdminRequest } from '@/lib/auth/session';
import { createAsset } from '@/lib/mongodb/assets';
import { uploadImageToR2 } from '@/lib/r2/upload';

export const runtime = 'nodejs';

const MAX_BYTES = 15 * 1024 * 1024; // 15 MB
const ACCEPTED = ['image/jpeg', 'image/png', 'image/webp', 'image/avif'];

export async function POST(request: Request) {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const form = await request.formData();
  const file = form.get('file');

  if (!(file instanceof File)) {
    return NextResponse.json({ error: 'No file provided' }, { status: 400 });
  }
  if (!ACCEPTED.includes(file.type)) {
    return NextResponse.json(
      { error: `Unsupported type: ${file.type}` },
      { status: 415 },
    );
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: 'File too large' }, { status: 413 });
  }

  try {
    const buffer = Buffer.from(await file.arrayBuffer());
    const asset = await uploadImageToR2(buffer, file.name);
    await createAsset(asset).catch((err) => {
      // R2 upload succeeded; the Mongo record is best-effort (library listing).
      console.warn('[api/upload] asset record not saved:', err?.message);
    });
    return NextResponse.json(asset, { status: 201 });
  } catch (err) {
    console.error('[api/upload]', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Upload failed' },
      { status: 500 },
    );
  }
}
