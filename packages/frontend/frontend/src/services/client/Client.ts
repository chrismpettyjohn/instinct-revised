import EventEmitter from 'events';
import {ClientEvent, ClientService} from './';

class ClientServiceImplementation implements ClientService {
  // @ts-ignore - Unsure why this isn't working
  readonly eventListener = new EventEmitter();

  constructor() {
    if ((window as any).FlashExternalInterface === undefined) {
      (window as any).FlashExternalInterface = {};
    }

    (window as any).FlashExternalInterface.logLoginStep = (
      step: string
    ): void => {
      const stepToProgress: Record<string, number> = {
        'client.init.swf.loaded': 10,
        'client.init.core.init': 15,
        'client.init.socket.ok': 25,
        'client.init.handshake.start': 30,
        'client.init.auth.ok': 50,
        'client.init.localization.loaded': 60,
        'client.init.core.running': 75,
        'client.init.config.loaded': 80,
        'client.init.room.ready': 90,
        'client.init.room.enter': 100,
      };

      if (stepToProgress[step]) {
        const progress: number = stepToProgress[step] ?? 0;

        this.eventListener.emit(ClientEvent.LOADING_PROGRESS, progress);

        if (progress === 100) {
          this.eventListener.emit(ClientEvent.ENTERED_HOTEL);
        }
      }
    };
  }

  enterRoom(roomID: number): void {
    return (document as any)
      .getElementById('client-area')!
      .openlink('navigator/goto/' + roomID);
  }
}

export const clientService: ClientService = new ClientServiceImplementation();
