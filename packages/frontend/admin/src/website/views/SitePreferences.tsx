import {FormGroup} from 'reactstrap';
import React, {useContext} from 'react';
import {Form, Input, Row} from '@instinct-web/core';
import {websiteSettingsContext} from '../context/WebsiteSettings';
import Toggle from 'react-toggle';

export function SitePreferences() {
  const {config, showSpinner, setConfig, saveChanges} = useContext(
    websiteSettingsContext
  );

  return (
    <Form className="" onSubmit={saveChanges}>
      <h2>Site Preferences</h2>
      <FormGroup>
        <h4>Site Name</h4>
        <Input
          type="text"
          name="siteName"
          onChange={setConfig}
          value={config.siteName}
        />
      </FormGroup>
      <FormGroup>
        <h4>Site URL</h4>
        <Input
          type="text"
          name="siteLink"
          onChange={setConfig}
          value={config.siteLink}
        />
      </FormGroup>
      <FormGroup>
        <h4>Discord URL</h4>
        <Input
          type="text"
          name="discordURL"
          onChange={setConfig}
          value={config.discordURL}
        />
      </FormGroup>
      <FormGroup>
        <h4>Maintenance</h4>
        <Toggle
          checked={config.maintenanceEnabled}
          onChange={e => setConfig('maintenanceEnabled', e.target.checked)}
        />
      </FormGroup>
      <FormGroup>
        <h4>Beta Mode</h4>
        <Toggle
          checked={config.siteBeta}
          onChange={e => setConfig('siteBeta', e.target.checked)}
        />
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
