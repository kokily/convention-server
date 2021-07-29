import { getRepository } from 'typeorm';
import { UpdateTipMutationArgs, UpdateTipResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import authResolver from '../../../libs/authenticate';
import { cleanNullArgs } from '../../../libs/utils';
import { Tip } from '../../../entities/Tip';

const resolvers: Resolvers = {
  Mutation: {
    UpdateTip: authResolver(
      async (_, args: UpdateTipMutationArgs): Promise<UpdateTipResponse> => {
        const { id } = args;

        try {
          await getRepository(Tip).update(
            { id },
            { ...cleanNullArgs(args), updated_at: new Date() }
          );

          return {
            ok: true,
            error: null,
          };
        } catch (err) {
          return {
            ok: false,
            error: null,
          };
        }
      }
    ),
  },
};

export default resolvers;
