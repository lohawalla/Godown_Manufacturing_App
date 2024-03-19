import {apiCall} from '..';
import {loginRoutes} from '../apiRoutes';

export const login = async (values: any) => {
  const data = await apiCall('post', `${loginRoutes}`, values);
  return data;
};
