import { getRepository } from 'typeorm';
import {
  RemoveWeddingEventMutationArgs,
  RemoveWeddingEventResponse,
} from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import { WeddingEvent } from '../../../entities/WeddingEvent';
import authResolver from '../../../libs/authenticate';

const resolvers: Resolvers = {
  Mutation: {
    RemoveWeddingEvent: authResolver(
      async (
        _,
        args: RemoveWeddingEventMutationArgs
      ): Promise<RemoveWeddingEventResponse> => {
        const { id } = args;

        try {
          await getRepository(WeddingEvent).delete(id);

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
