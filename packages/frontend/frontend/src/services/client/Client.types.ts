import {EventEmitter} from 'events';

export interface ClientService {
  eventListener: EventEmitter;
  enterRoom: (roomID: number) => void;
}

export enum ClientEvent {
  LOADING_PROGRESS = 'loadingProgress',
  ENTERED_HOTEL = 'enteredHotelEvent',
}
