import {useQuery} from '@tanstack/react-query';
import {allGodownsApi} from './apis';

export const useFetchAllGodowns = () => {
  return useQuery({
    queryKey: ['allGodowns'],
    queryFn: allGodownsApi,
  });
};
