import {apiCall} from '..';
import {allAislesApiPath, allGodownsApiPath} from '../apiRoutes';
import {assignQRPath} from '../apiRoutes';
import {
  AllAislesApiResponse,
  AssignQrCodeAisleValue,
  AssignQrCodeAisleValueResponse,
} from './types';

console.log('PATH 1:', allAislesApiPath);
console.log('PATH QR:', assignQRPath);
console.log('PATH 3:', allGodownsApiPath);

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
    `${assignQRPath}`,
    sendValue,
  );
  console.log(`PATH IN ASIGN QR API:${assignQRPath}`);
  return data;
};
