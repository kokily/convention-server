import { getRepository } from 'typeorm';
import {
  ReadWeddingEventQueryArgs,
  ReadWeddingEventResponse,
} from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import { WeddingEvent } from '../../../entities/WeddingEvent';

const resolvers: Resolvers = {
  Query: {
    ReadWeddingEvent: async (
      _,
      args: ReadWeddingEventQueryArgs
    ): Promise<ReadWeddingEventResponse> => {
      const { id } = args;

      try {
        const weddingEvent = await getRepository(WeddingEvent).findOne(id);

        if (!weddingEvent) {
          return {
            ok: false,
            error: '존재하지 않는 게시물입니다.',
            weddingEvent: null,
          };
        }

        return {
          ok: true,
          error: null,
          weddingEvent,
        };
      } catch (err) {
        return {
          ok: false,
          error: err.message,
          weddingEvent: null,
        };
      }
    },
  },
};

export default resolvers;
