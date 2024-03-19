import {useQuery} from '@tanstack/react-query';
import {allAislesApi} from './apis';

interface FetchAllAislesParams {
  shelfId: string;
}

export const useFetchAllAisles = ({shelfId}: FetchAllAislesParams) => {
  return useQuery({
    queryKey: ['allAisles', {shelfId}],
    queryFn: () => allAislesApi(shelfId),
  });
};
