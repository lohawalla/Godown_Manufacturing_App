import {apiCall} from '..';
import {salesBill, salesList} from '../ApiRoutes';
import {AllSalesApiResponse} from './types';

export const fetchSalesData = async (): Promise<any> => {
  const data = await apiCall<AllSalesApiResponse>('get', `${salesList}`);
  return data;
};

export const fetchSalesBill = async (id: any) => {
  const data = await apiCall('get', `${salesBill + '/' + id}`);
  return data;
};
