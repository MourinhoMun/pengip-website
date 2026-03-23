import jwt from 'jsonwebtoken';

export type MotionControlTaskStatus = 'submitted' | 'processing' | 'succeed' | 'failed';

export interface MotionControlCreateParams {
  model_name?: 'kling-v2-6' | 'kling-v3';
  prompt?: string;
  image_url: string;
  video_url: string;
  keep_original_sound?: 'yes' | 'no';
  character_orientation: 'image' | 'video';
  mode: 'std' | 'pro';
  watermark_info?: { enabled: boolean };
  callback_url?: string;
  external_task_id?: string;
}

export interface MotionControlCreateResponse {
  code: number;
  message: string;
  request_id?: string;
  data?: {
    task_id: string;
    task_info?: { external_task_id?: string };
    task_status: MotionControlTaskStatus;
    created_at: number;
    updated_at: number;
  };
}

export interface MotionControlQueryResponse {
  code: number;
  message: string;
  request_id?: string;
  data?: {
    task_id: string;
    task_status: MotionControlTaskStatus;
    task_status_msg?: string;
    task_info?: { external_task_id?: string };
    task_result?: {
      videos?: Array<{ id: string; url: string; watermark_url?: string; duration?: string }>;
    };
    watermark_info?: { enabled: boolean };
    final_unit_deduction?: string;
    created_at: number;
    updated_at: number;
  };
}

function getEnvOrThrow(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`MISSING_ENV:${name}`);
  return v;
}

export function createProviderToken(): string {
  const ak = getEnvOrThrow('MOTION_CONTROL_AK');
  const sk = getEnvOrThrow('MOTION_CONTROL_SK');

  const nowSec = Math.floor(Date.now() / 1000);

  // Provider spec: JWT HS256 with iss/exp/nbf.
  return jwt.sign(
    {
      iss: ak,
      exp: nowSec + 1800,
      nbf: nowSec - 5,
    },
    sk,
    {
      algorithm: 'HS256',
      header: {
        alg: 'HS256',
        typ: 'JWT',
      },
    }
  );
}

export function getProviderBaseUrl(): string {
  return process.env.MOTION_CONTROL_API_BASE || 'https://api-beijing.klingai.com';
}

export async function providerCreateTask(params: MotionControlCreateParams): Promise<MotionControlCreateResponse> {
  const token = createProviderToken();
  const base = getProviderBaseUrl();

  const res = await fetch(`${base}/v1/videos/motion-control`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(params),
  });

  const data = (await res.json().catch(() => null)) as MotionControlCreateResponse | null;
  if (!data) {
    throw new Error(`PROVIDER_BAD_RESPONSE:${res.status}`);
  }
  return data;
}

export async function providerQueryTask(id: string): Promise<MotionControlQueryResponse> {
  const token = createProviderToken();
  const base = getProviderBaseUrl();

  const res = await fetch(`${base}/v1/videos/motion-control/${encodeURIComponent(id)}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = (await res.json().catch(() => null)) as MotionControlQueryResponse | null;
  if (!data) {
    throw new Error(`PROVIDER_BAD_RESPONSE:${res.status}`);
  }
  return data;
}
