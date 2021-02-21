"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emulatorSettingsWire = void 0;
function emulatorSettingsWire(options) {
    return options.map(_ => ({
        id: _.key,
        label: _.key,
        value: _.value,
    }));
}
exports.emulatorSettingsWire = emulatorSettingsWire;
