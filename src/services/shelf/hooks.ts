import {useQuery} from '@tanstack/react-query';
import {allShelvesApi} from './api';

interface FetchAllShelvesParams {
  godownId: string;
}

export const useFetchAllShelves = ({godownId}: FetchAllShelvesParams) => {
  return useQuery({
    queryKey: ['allShelves', {godownId}],
    queryFn: () => allShelvesApi(godownId),
  });
};
