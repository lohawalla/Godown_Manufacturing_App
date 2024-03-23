import {apiCall} from '..';
import {allShelvesApiPath} from '../ApiRoutes';
import {AllShelvesApiResponse} from './types';

export const allShelvesApi = async (
  godownId: string,
): Promise<AllShelvesApiResponse> => {
  const data = await apiCall(
    'get',
    `${allShelvesApiPath}?godownId=${godownId}`,
  );

  return data as AllShelvesApiResponse;
};
