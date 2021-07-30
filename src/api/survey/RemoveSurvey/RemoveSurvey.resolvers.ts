import { getRepository } from 'typeorm';
import {
  RemoveSurveyMutationArgs,
  RemoveSurveyResponse,
} from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import authResolver from '../../../libs/authenticate';
import { Survey } from '../../../entities/Survey';

const resolvers: Resolvers = {
  Mutation: {
    RemoveSurvey: authResolver(
      async (
        _,
        args: RemoveSurveyMutationArgs
      ): Promise<RemoveSurveyResponse> => {
        const { id } = args;

        try {
          await getRepository(Survey).delete(id);

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
