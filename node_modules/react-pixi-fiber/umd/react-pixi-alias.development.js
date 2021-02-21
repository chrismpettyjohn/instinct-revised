(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react-dom'), require('react-pixi-fiber')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react-dom', 'react-pixi-fiber'], factory) :
  (global = global || self, factory(global.ReactPixiFiber = {}, global.ReactDOM, global.ReactPixiFiber));
}(this, function (exports, ReactDOM, ReactPixiFiber) { 'use strict';

  ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;

  // Note: ReactPIXI.factories is not supported

  var CustomPIXIComponent = ReactPixiFiber.CustomPIXIComponent;
  var render = ReactDOM.render;
  var unmountComponentAtNode = ReactDOM.unmountComponentAtNode;
  var BitmapText = ReactPixiFiber.BitmapText;
  var DisplayObjectContainer = ReactPixiFiber.Container;
  var Graphics = ReactPixiFiber.Graphics;
  var ParticleContainer = ReactPixiFiber.ParticleContainer;
  var Sprite = ReactPixiFiber.Sprite;
  var Stage = ReactPixiFiber.Stage;
  var Text = ReactPixiFiber.Text;
  var TilingSprite = ReactPixiFiber.TilingSprite;
  var ReactPIXI = {
    // Render methods
    CustomPIXIComponent: CustomPIXIComponent,
    render: render,
    unmountComponentAtNode: unmountComponentAtNode,
    // Components
    BitmapText: BitmapText,
    DisplayObjectContainer: DisplayObjectContainer,
    Graphics: Graphics,
    ParticleContainer: ParticleContainer,
    Sprite: Sprite,
    Stage: Stage,
    Text: Text,
    TilingSprite: TilingSprite
  };

  exports.CustomPIXIComponent = CustomPIXIComponent;
  exports.render = render;
  exports.unmountComponentAtNode = unmountComponentAtNode;
  exports.BitmapText = BitmapText;
  exports.DisplayObjectContainer = DisplayObjectContainer;
  exports.Graphics = Graphics;
  exports.ParticleContainer = ParticleContainer;
  exports.Sprite = Sprite;
  exports.Stage = Stage;
  exports.Text = Text;
  exports.TilingSprite = TilingSprite;
  exports.default = ReactPIXI;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
