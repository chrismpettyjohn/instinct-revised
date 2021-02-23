"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emulatorTextsWire = void 0;
function emulatorTextsWire(options) {
    return options.map(_ => ({
        id: _.key,
        label: _.key,
        value: _.value,
    }));
}
exports.emulatorTextsWire = emulatorTextsWire;
