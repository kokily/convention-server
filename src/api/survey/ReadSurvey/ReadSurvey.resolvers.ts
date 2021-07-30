import { getRepository } from 'typeorm';
import { ReadSurveyQueryArgs, ReadSurveyResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import authResolver from '../../../libs/authenticate';
import { Survey } from '../../../entities/Survey';

const resolvers: Resolvers = {
  Query: {
    ReadSurvey: authResolver(
      async (_, args: ReadSurveyQueryArgs): Promise<ReadSurveyResponse> => {
        const { id } = args;

        try {
          const survey = await getRepository(Survey).findOne(id);

          if (!survey) {
            return {
              ok: false,
              error: '해당하는 게시물이 없습니다.',
              survey: null,
            };
          }

          return {
            ok: true,
            error: null,
            survey,
          };
        } catch (err) {
          return {
            ok: false,
            error: err.message,
            survey: null,
          };
        }
      }
    ),
  },
};

export default resolvers;
