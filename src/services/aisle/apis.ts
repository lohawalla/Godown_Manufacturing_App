import {apiCall} from '..';
import {allAislesApiPath} from '../apiRoutes';
import {AllAislesApiResponse} from './types';

export const allAislesApi = async (
  shelfId: string,
): Promise<AllAislesApiResponse> => {
  const data = await apiCall<AllAislesApiResponse>(
    'get',
    `${allAislesApiPath}?shelfId=${shelfId}`,
  );
  return data;
};
