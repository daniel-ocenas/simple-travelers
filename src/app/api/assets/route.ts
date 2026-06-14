import { NextResponse } from 'next/server';

import { isAdminRequest } from '@/lib/auth/session';
import { deleteAssetRecord, listAssets } from '@/lib/mongodb/assets';
import { deleteFromR2 } from '@/lib/r2/delete';
import { RATE_LIMITS } from '@/lib/rate-limit/limiter';
import { enforceRateLimit } from '@/lib/rate-limit/http';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const limited = enforceRateLimit(request, 'assets-list', RATE_LIMITS.assetsList);
  if (limited) return limited;

  if (!(await isAdminRequest())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const assets = await listAssets();
    return NextResponse.json({ assets });
  } catch (err) {
    console.warn('[api/assets] list failed:', err);
    return NextResponse.json({ assets: [] });
  }
}

export async function DELETE(request: Request) {
  const limited = enforceRateLimit(
    request,
    'assets-delete',
    RATE_LIMITS.assetsDelete,
  );
  if (limited) return limited;

  if (!(await isAdminRequest())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const key = new URL(request.url).searchParams.get('key');
  if (!key) {
    return NextResponse.json({ error: 'Missing key' }, { status: 400 });
  }
  try {
    await deleteFromR2(key);
    await deleteAssetRecord(key);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[api/assets] delete failed:', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Delete failed' },
      { status: 500 },
    );
  }
}
