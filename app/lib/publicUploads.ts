import path from 'path';
import fs from 'fs/promises';
import crypto from 'crypto';

export interface SaveUploadResult {
  publicPath: string; // e.g. /uploads/motion-control/20260323/xxxx.mp4
  absPath: string;
  size: number;
  mimeType: string;
}

function yyyymmdd(d: Date): string {
  const y = String(d.getFullYear());
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}${m}${day}`;
}

function safeExt(filename: string): string {
  const ext = path.extname(filename || '').toLowerCase();
  if (!ext) return '';
  // Very small allowlist: keep only common image/video extensions.
  if (!['.jpg', '.jpeg', '.png', '.mp4', '.mov'].includes(ext)) return '';
  return ext;
}

export async function savePublicUpload(file: File, opts: { subdir: string; maxBytes: number }): Promise<SaveUploadResult> {
  if (!file) throw new Error('MISSING_FILE');
  if (file.size > opts.maxBytes) throw new Error('FILE_TOO_LARGE');

  const ext = safeExt(file.name);
  if (!ext) throw new Error('UNSUPPORTED_FILE_TYPE');

  const dateDir = yyyymmdd(new Date());
  const relDir = path.join('uploads', opts.subdir, dateDir);
  const absDir = path.join(process.cwd(), 'public', relDir);

  await fs.mkdir(absDir, { recursive: true });

  const id = crypto.randomUUID();
  const relFile = path.join(relDir, `${id}${ext}`);
  const absFile = path.join(process.cwd(), 'public', relFile);

  const ab = await file.arrayBuffer();
  await fs.writeFile(absFile, Buffer.from(ab));

  return {
    publicPath: `/${relFile.replace(/\\/g, '/')}`,
    absPath: absFile,
    size: file.size,
    mimeType: file.type || 'application/octet-stream',
  };
}
