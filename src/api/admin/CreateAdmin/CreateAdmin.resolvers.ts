import { getRepository } from 'typeorm';
import bcrypt from 'bcryptjs';
import { CreateAdminMutationArgs, CreateAdminResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import { Admin } from '../../../entities/Admin';

const resolvers: Resolvers = {
  Mutation: {
    CreateAdmin: async (
      _,
      args: CreateAdminMutationArgs
    ): Promise<CreateAdminResponse> => {
      const { password } = args;

      try {
        const exists = await getRepository(Admin).find();

        if (exists.length > 0) {
          return {
            ok: false,
            error: '이미 관리자가 등록되어 있습니다.',
          };
        }

        const newPassword = await bcrypt.hash(password, 10);
        const admin = await getRepository(Admin).create({
          password: newPassword,
        });

        await admin.save();

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
