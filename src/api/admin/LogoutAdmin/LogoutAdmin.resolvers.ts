import { Context } from 'koa';
import { LogoutAdminResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import authResolver from '../../../libs/authenticate';
import { setCookie } from '../../../libs/token';

const resolvers: Resolvers = {
  Mutation: {
    LogoutAdmin: authResolver(
      async (
        _,
        __,
        { ctx }: { ctx: Context }
      ): Promise<LogoutAdminResponse> => {
        setCookie(ctx, '', '');

        const token = ctx.cookies.get('refreshToken');

        if (token) {
          return {
            ok: false,
            error: '로그아웃이 실패했습니다.',
          };
        }

        return {
          ok: true,
          error: null,
        };
      }
    ),
  },
};

export default resolvers;
