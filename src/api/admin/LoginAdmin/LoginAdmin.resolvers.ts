import { Context } from 'koa';
import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import { LoginAdminMutationArgs, LoginAdminResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import { Admin } from '../../../entities/Admin';
import {
  createAccessToken,
  createRefreshToken,
  setCookie,
} from '../../../libs/token';

const resolvers: Resolvers = {
  Mutation: {
    LoginAdmin: async (
      _,
      args: LoginAdminMutationArgs,
      { ctx }: { ctx: Context }
    ): Promise<LoginAdminResponse> => {
      const { password } = args;

      try {
        const admin = await getRepository(Admin).findOne({ username: 'admin' });

        if (!admin) {
          return {
            ok: false,
            error: '관리자가 존재하지 않습니다.',
            token: null,
          };
        }

        const valid = await bcrypt.compare(password, admin.password);

        if (!valid) {
          return {
            ok: false,
            error: '비밀번호가 올바르지 않습니다.',
            token: null,
          };
        }

        const accessToken = createAccessToken(admin);
        const refreshToken = createRefreshToken(admin);

        setCookie(ctx, accessToken, refreshToken);

        return {
          ok: true,
          error: null,
          token: accessToken,
        };
      } catch (err) {
        return {
          ok: false,
          error: err.message,
          token: null,
        };
      }
    },
  },
};

export default resolvers;
