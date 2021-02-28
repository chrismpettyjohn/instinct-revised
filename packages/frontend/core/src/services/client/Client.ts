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
        'client.init.core.init': 25,
        'client.init.socket.ok': 35,
        'client.init.handshake.start': 45,
        'client.init.auth.ok': 55,
        'client.init.localization.loaded': 70,
        'client.init.core.running': 85,
        'client.init.config.loaded': 100,
      };

      console.log(stepToProgress);

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
