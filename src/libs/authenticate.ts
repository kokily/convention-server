import { Context } from 'koa';
import jwt from 'jsonwebtoken';
import { Admin } from '../entities/Admin';
import { getRepository } from 'typeorm';
import { createAccessToken, createRefreshToken, setCookie } from './token';

const decodeToken = async (token: string): Promise<Admin | undefined> => {
  const decoded: any = jwt.verify(token, process.env.ACCESS_SECRET!);
  const admin = await getRepository(Admin).findOne({ id: decoded.adminId });

  if (admin) {
    return admin;
  } else {
    return undefined;
  }
};

const authResolver =
  (resolverFunction) => async (parent, args, context, info) => {
    const { ctx }: { ctx: Context } = context;
    const token = ctx.req.headers['authorization'];

    if (!token) {
      setCookie(ctx, '', '');
      throw new Error('Not Authenticated');
    }

    try {
      const admin = await decodeToken(token.split(' ')[1]);

      if (admin) {
        ctx.state.admin = {
          adminId: admin.id,
        };
      } else {
        ctx.state.admin = undefined;
      }
    } catch (err) {
      const message =
        err.name === 'JsonWebTokenError' ? 'Unauthorized' : err.message;

      if (message === 'jwt expired') {
        const token = ctx.cookies.get('refreshToken');

        if (!token) {
          setCookie(ctx, '', '');
        } else {
          try {
            const payload: any = jwt.verify(token, process.env.REFRESH_SECRET!);
            const admin = await getRepository(Admin).findOne({
              id: payload.adminId,
            });

            if (!admin) {
              setCookie(ctx, '', '');
            } else {
              const accessToken = createAccessToken(admin);
              const refreshToken = createRefreshToken(admin);

              setCookie(ctx, accessToken, refreshToken);

              ctx.state.admin = {
                adminId: admin.id,
              };
            }
          } catch (err) {
            setCookie(ctx, '', '');
          }
        }
      }
    }

    const resolved = await resolverFunction(parent, args, context, info);

    return resolved;
  };

export default authResolver;
