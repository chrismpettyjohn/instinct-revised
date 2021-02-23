/// <reference types="node" />
import { EventEmitter } from 'events';
export interface ClientService {
    eventListener: EventEmitter;
    enterRoom: (roomID: number) => void;
}
export declare enum ClientEvent {
    LOADING_PROGRESS = "loadingProgress",
    ENTERED_HOTEL = "enteredHotelEvent"
}
