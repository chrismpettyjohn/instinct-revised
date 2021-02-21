import {createFetchHook} from '../fetch-hook.base';
import {UserGuestbookPost} from '@instinct-prj/interface';
import {guestbookService} from '../../services/guestbook';

export const useFetchGuestbookForUser = (userID: number) =>
  createFetchHook<UserGuestbookPost[]>(() =>
    guestbookService.getAllForUser(userID)
  );
