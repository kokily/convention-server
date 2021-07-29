import { getRepository } from 'typeorm';
import { AddTipMutationArgs, AddTipResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import authResolver from '../../../libs/authenticate';
import { Tip } from '../../../entities/Tip';

const resolvers: Resolvers = {
  Mutation: {
    AddTip: authResolver(
      async (_, args: AddTipMutationArgs): Promise<AddTipResponse> => {
        try {
          const tip = await getRepository(Tip).create({ ...args });

          await tip.save();

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
      }
    ),
  },
};

export default resolvers;
