import { Context } from 'koa';
import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import { LoginAdminMutationArgs, LoginAdminResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import { Admin } from '../../../entities/Admin';

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
          };
        }

        const valid = await bcrypt.compare(password, admin.password);

        if (!valid) {
          return {
            ok: false,
            error: '비밀번호가 올바르지 않습니다.',
          };
        }

        return {
          ok: true,
          error: null,
        };
      } catch (err) {
        return {
          ok: false,
          error: err.message,
        };
      }
    },
  },
};

export default resolvers;
