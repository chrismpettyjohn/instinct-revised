import {useEffect, useState} from 'react';
import {UserBan} from '@instinct-prj/interface';
import {banService} from '../../services/ban';

export function useFetchBanByID(banID: string): UserBan | undefined {
  const [ban, setBan] = useState<UserBan>();

  useEffect(() => {
    setBan(undefined);

    async function fetchBan() {
      const banData = await banService.getByID(banID);
      setBan(banData);
    }

    fetchBan();
  }, [banID]);

  return ban;
}
