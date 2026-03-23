import type { NextRequest } from 'next/server';

export function getBaseUrl(req: NextRequest): string {
  // Prefer configured public URL (works behind reverse proxy).
  const envUrl = process.env.NEXTAUTH_URL;
  if (envUrl) return envUrl.replace(/\/$/, '');

  const host = req.headers.get('x-forwarded-host') || req.headers.get('host');
  const proto = req.headers.get('x-forwarded-proto') || 'https';
  if (!host) return '';

  return `${proto}://${host}`;
}
