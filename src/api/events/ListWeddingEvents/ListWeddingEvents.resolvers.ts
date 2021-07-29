import { getManager, getRepository } from 'typeorm';
import {
  ListWeddingEventsQueryArgs,
  ListWeddingEventsResponse,
} from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import { WeddingEvent } from '../../../entities/WeddingEvent';

const resolvers: Resolvers = {
  Query: {
    ListWeddingEvents: async (
      _,
      args: ListWeddingEventsQueryArgs
    ): Promise<ListWeddingEventsResponse> => {
      const { title, body, cursor } = args;

      try {
        const query = await getManager()
          .createQueryBuilder(WeddingEvent, 'events')
          .limit(9)
          .orderBy('events.created_at', 'DESC')
          .addOrderBy('events.id', 'DESC');

        if (title) {
          query.andWhere('events.title like :title', {
            title: `%${title}%`,
          });
        }

        if (body) {
          query.andWhere('events.body like :body', {
            body: `%${body}%`,
          });
        }

        if (cursor) {
          const weddingEvent = await getRepository(WeddingEvent).findOne({
            id: cursor,
          });

          if (!weddingEvent) {
            return {
              ok: false,
              error: '알 수 없는 에러 발생',
              weddingEvents: null,
            };
          }

          query.andWhere('events.created_at > :date', {
            date: weddingEvent.created_at,
          });

          query.orWhere('events.created_at = :date AND events.id < id', {
            date: weddingEvent.created_at,
            id: weddingEvent.id,
          });
        }

        const weddingEvents = await query.getMany();

        return {
          ok: true,
          error: null,
          weddingEvents,
        };
      } catch (err) {
        return {
          ok: false,
          error: err.message,
          weddingEvents: null,
        };
      }
    },
  },
};

export default resolvers;
