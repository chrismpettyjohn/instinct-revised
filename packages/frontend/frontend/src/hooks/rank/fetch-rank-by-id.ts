import {Rank} from '@instinct-prj/interface';
import {useEffect, useState} from 'react';
import {rankService} from '../../services/rank';

export function useFetchRankByID(rankID: string): Rank | undefined {
  const [rank, setRank] = useState<Rank>();

  useEffect(() => {
    setRank(undefined);
    async function fetchRank() {
      const rankData = await rankService.getByID(rankID);
      setRank(rankData);
    }

    fetchRank();
  }, [rankID]);

  return rank;
}
