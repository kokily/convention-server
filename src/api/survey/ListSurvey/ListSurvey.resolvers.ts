import { getManager } from 'typeorm';
import { ListSurveyQueryArgs, ListSurveyResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import authResolver from '../../../libs/authenticate';
import { Survey } from '../../../entities/Survey';

const resolvers: Resolvers = {
  Query: {
    ListSurvey: authResolver(
      async (_, args: ListSurveyQueryArgs): Promise<ListSurveyResponse> => {
        const { page } = args;

        try {
          const query = await getManager()
            .createQueryBuilder(Survey, 'survey')
            .limit(10)
            .skip((page ? page - 1 : 0) * 10)
            .orderBy('survey.created_at', 'DESC')
            .addOrderBy('survey.id', 'DESC');

          const survey = await query.getMany();
          const surveyCount = await query.getCount();

          return {
            ok: true,
            error: null,
            survey,
            lastPage: Math.ceil(surveyCount / 10),
          };
        } catch (err) {
          return {
            ok: false,
            error: err.message,
            survey: null,
            lastPage: 0,
          };
        }
      }
    ),
  },
};

export default resolvers;
