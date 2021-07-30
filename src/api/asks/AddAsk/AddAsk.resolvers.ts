import { getRepository } from 'typeorm';
import { AddAskMutationArgs, AddAskResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import { Ask } from '../../../entities/Ask';

const resolvers: Resolvers = {
  Mutation: {
    AddAsk: async (_, args: AddAskMutationArgs): Promise<AddAskResponse> => {
      try {
        const ask = await getRepository(Ask).create({ ...args });

        await ask.save();

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
