import { useQuery, useQueryClient } from 'react-query';

import axios from '../../../helpers/Axios';

export default function useRecordingsReSync() {
  const queryClient = useQueryClient();

  return useQuery(
    'getRecordingsResync',
    () => axios.get('/recordings/resync.json').then(() => queryClient.invalidateQueries('getServerRecordings')),
    { enabled: false },
  );
}