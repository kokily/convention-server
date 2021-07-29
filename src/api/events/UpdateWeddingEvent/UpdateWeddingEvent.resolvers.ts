import { getRepository } from 'typeorm';
import {
  UpdateWeddingEventMutationArgs,
  UpdateWeddingEventResponse,
} from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import { cleanNullArgs } from '../../../libs/utils';
import authResolver from '../../../libs/authenticate';
import { WeddingEvent } from '../../../entities/WeddingEvent';

const resolvers: Resolvers = {
  Mutation: {
    UpdateWeddingEvent: authResolver(
      async (
        _,
        args: UpdateWeddingEventMutationArgs
      ): Promise<UpdateWeddingEventResponse> => {
        const { id } = args;

        try {
          await getRepository(WeddingEvent).update(
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
            error: err.message,
          };
        }
      }
    ),
  },
};

export default resolvers;
