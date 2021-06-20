import {GuestbookService} from './Guestbook.types';
import {GuestbookServiceImplementation} from './Guestbook';

export const guestbookService: GuestbookService =
  new GuestbookServiceImplementation();
