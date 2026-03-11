import { NextResponse } from 'next/server';

export type ApiErrorBody = {
  code: string;
  error: string;
  reason?: string;
  next?: string;
};

export function fail(status: number, body: ApiErrorBody) {
  // Keep HTTP status for machines; keep body for humans.
  return NextResponse.json(body, { status });
}

export function ok(data: any, status: number = 200) {
  return NextResponse.json(data, { status });
}

export function mapError(err: unknown): { status: number; body: ApiErrorBody } {
  const msg = String((err as { message?: unknown } | null)?.message ?? err ?? '');

  if (msg === 'SUBSCRIPTION_REQUIRED') {
    return {
      status: 403,
      body: {
        code: 'SUBSCRIPTION_REQUIRED',
        error: '你的会员已到期，暂时用不了这个功能。',
        reason: '系统检测到你的会员订阅已过期。',
        next: '请先续费会员后再试；如果你刚续费，刷新页面或重新登录再试一次。',
      },
    };
  }

  if (msg === 'Insufficient points') {
    return {
      status: 402,
      body: {
        code: 'INSUFFICIENT_POINTS',
        error: '你的积分不够了，暂时无法继续使用。',
        reason: '本次操作需要消耗积分，但你的余额不足。',
        next: '请先充值积分后再试；如果你刚充值，刷新页面再试一次。',
      },
    };
  }

  if (msg === 'User not found') {
    return {
      status: 401,
      body: {
        code: 'USER_NOT_FOUND',
        error: '我们没找到你的账号信息。',
        reason: '可能是登录信息失效，或账号尚未创建成功。',
        next: '回到主站重新登录/重新激活后再试；如果仍不行，把截图发给我们。',
      },
    };
  }

  return {
    status: 500,
    body: {
      code: 'SERVER_ERROR',
      error: '系统开小差了，这会儿没处理成功。',
      reason: '服务器遇到了一点问题，可能是临时波动。',
      next: '你可以先等 10-30 秒再试一次；如果连续多次失败，请把截图和发生时间发给我们。',
    },
  };
}
