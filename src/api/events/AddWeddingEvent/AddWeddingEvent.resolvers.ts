import { getRepository } from 'typeorm';
import {
  AddWeddingEventMutationArgs,
  AddWeddingEventResponse,
} from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import authResolver from '../../../libs/authenticate';
import { WeddingEvent } from '../../../entities/WeddingEvent';

const resolvers: Resolvers = {
  Mutation: {
    AddWeddingEvent: authResolver(
      async (
        _,
        args: AddWeddingEventMutationArgs
      ): Promise<AddWeddingEventResponse> => {
        try {
          const weddingEvent = await getRepository(WeddingEvent).create({
            ...args,
          });

          await weddingEvent.save();

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
