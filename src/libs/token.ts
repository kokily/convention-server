import { Context } from 'koa';
import jwt from 'jsonwebtoken';
import { Admin } from '../entities/Admin';
import { isProd } from './constants';

export function createAccessToken(admin: Admin) {
  const token = {
    adminId: admin.id,
  };

  return jwt.sign(token, process.env.ACCESS_SECRET!, {
    expiresIn: '15m',
  });
}

export function createRefreshToken(admin: Admin) {
  const token = {
    adminId: admin.id,
  };

  return jwt.sign(token, process.env.REFRESH_SECRET!, {
    expiresIn: '7d',
  });
}

export function setCookie(
  ctx: Context,
  accessToken: string,
  refreshToken: string
) {
  ctx.cookies.set('accessToken', accessToken, {
    httpOnly: false,
    domain: isProd ? '.mndconvention.co.kr' : undefined,
    sameSite: 'lax',
    secure: isProd && true,
  });

  ctx.cookies.set('refreshToken', refreshToken, {
    httpOnly: true,
    domain: isProd ? '.mndconvention.co.kr' : undefined,
    sameSite: 'lax',
    secure: isProd && true,
  });
}
