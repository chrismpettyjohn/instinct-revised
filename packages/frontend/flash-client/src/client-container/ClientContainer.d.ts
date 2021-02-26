declare global {
  interface Window {
    FlashExternalInterface: any;
  }
}

window.FlashExternalInterface = window.FlashExternaInterface || {};
