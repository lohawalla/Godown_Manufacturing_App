import {apiCall} from '..';
import {allAislesApiPath, assignQrCodeAislePath} from '../ApiRoutes';
import {
  AllAislesApiResponse,
  AssignQrCodeAisleValue,
  AssignQrCodeAisleValueResponse,
} from './types';

export const allAislesApi = async (
  shelfId: string,
): Promise<AllAislesApiResponse> => {
  const data = await apiCall<AllAislesApiResponse>(
    'get',
    `${allAislesApiPath}?shelfId=${shelfId}`,
  );
  console.log(`PATH IN ALL AISLE API:${allAislesApiPath}`);
  return data;
};

export const assignQrCodeAisle = async (
  sendValue: AssignQrCodeAisleValue,
): Promise<AssignQrCodeAisleValueResponse> => {
  const data = await apiCall<AssignQrCodeAisleValueResponse>(
    'post',
    `${assignQrCodeAislePath}`,
    sendValue,
  );

  return data;
};
