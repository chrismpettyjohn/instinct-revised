import Toggle from 'react-toggle';
import {FormGroup} from 'reactstrap';
import React, {useContext} from 'react';
import {Form, Input, Row} from '@instinct-web/core';
import {websiteSettingsContext} from '../context/WebsiteSettings';

export function ServerSettings() {
  const {config, showSpinner, setConfig, saveChanges} = useContext(
    websiteSettingsContext
  );
  return (
    <Form className="" onSubmit={saveChanges}>
      <h2>Server Settings</h2>
      <FormGroup>
        <div className="mt-3" style={{padding: 2}}>
          <h4>Emulator IP</h4>
          <Input
            type="text"
            name="emulatorIP"
            onChange={setConfig}
            value={config.emulatorIP}
          />
        </div>
        <div className="mt-3" style={{padding: 2}}>
          <h4>Emulator Port</h4>
          <Input
            type="text"
            name="emulatorPort"
            onChange={setConfig}
            value={config.emulatorPort}
          />
        </div>
      </FormGroup>
      <FormGroup>
        <div className="mt-3" style={{padding: 2}}>
          <h4>Enable Web Sockets</h4>
          <Toggle
            checked={config.websocketEnabled}
            onChange={e => setConfig('websocketEnabled', e.target.checked)}
          />
        </div>
        <div className="mt-3" style={{padding: 2}}>
          <h4>Web Socket Server</h4>
          <Input
            type="text"
            name="websocketIP"
            onChange={setConfig}
            value={config.websocketIP}
          />
        </div>
        <div className="mt-3" style={{padding: 2}}>
          <h4>Web Socket Port</h4>
          <Input
            type="text"
            name="websocketPort"
            onChange={setConfig}
            value={config.websocketPort}
          />
        </div>
      </FormGroup>
      <Row className="mt-3">
        <div className="col-6">&nbsp;</div>
        <div className="col-6 text-right">
          <button className="btn btn-primary" disabled={showSpinner}>
            {showSpinner ? <i className="fa fa-spinner fa-spin" /> : 'Save'}
          </button>
        </div>
      </Row>
    </Form>
  );
}
