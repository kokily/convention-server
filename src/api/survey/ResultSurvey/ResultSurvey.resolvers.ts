import { getManager } from 'typeorm';
import { ResultSurveyQueryArgs, ResultSurveyResponse } from '../../../@types';
import { Resolvers } from '../../../@types/resolvers';
import { Survey } from '../../../entities/Survey';
import authResolver from '../../../libs/authenticate';

const resolvers: Resolvers = {
  Query: {
    ResultSurvey: authResolver(
      async (_, args: ResultSurveyQueryArgs): Promise<ResultSurveyResponse> => {
        const { startDate, endDate } = args;

        try {
          const query = await getManager()
            .createQueryBuilder(Survey, 'survey')
            .where(
              'survey.created_at >= :startDate AND survey.created_at <= : endDate',
              {
                startDate,
                endDate,
              }
            );

          const survey = await query.getMany();
          const num = await query.getCount();

          const native = survey.map((item) => {
            item.native;
          });

          // 클라이언트 작성 후 테스트(날짜 문제)

          const result = {
            native: {
              soldier: 0,
              reserve: 0,
              official: 0,
              public: 0,
              general: 0,
            },
            belong: {
              army: 0,
              air: 0,
              navy: 0,
              marine: 0,
              national: 0,
            },
            purpose: {
              guest: 0,
              small: 0,
              big: 0,
              seminar: 0,
              etc: 0,
            },
            servicePoint: {
              veryGood: 0,
              good: 0,
              normal: 0,
              bad: 0,
              veryBad: 0,
            },
            mealsPoint: {
              veryGood: 0,
              good: 0,
              normal: 0,
              bad: 0,
              veryBad: 0,
            },
            facility: {
              veryGood: 0,
              good: 0,
              normal: 0,
              bad: 0,
              veryBad: 0,
            },
            reuse: {
              good: 0,
              normal: 0,
              bad: 0,
            },
          };

          return {
            ok: true,
            error: null,
            result,
            num,
          };
        } catch (err) {
          return {
            ok: false,
            error: null,
            result: null,
            num: 0,
          };
        }
      }
    ),
  },
};

export default resolvers;
