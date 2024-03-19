import {apiCall} from '..';
import {allGodownsApiPath} from '../apiRoutes';
import {AllGodownsApiResponse} from './types';

export const allGodownsApi = async (): Promise<AllGodownsApiResponse> => {
  const data = await apiCall<AllGodownsApiResponse>(
    'get',
    `${allGodownsApiPath}`,
  );
  return data;
};
