import {apiCall} from '..';
import {allGodownsApiPath} from '../ApiRoutes';
import { AllGodownsApiResponse } from './types';
// import {AllGodownsApiResponse} from './types';


export const allGodownsApi = async (): Promise<AllGodownsApiResponse> => {
  const data = await apiCall<AllGodownsApiResponse>(
    'get',
    `${allGodownsApiPath}`,
  );
  return data;
};
