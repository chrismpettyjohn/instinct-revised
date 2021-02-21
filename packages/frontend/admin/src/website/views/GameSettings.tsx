import {FormGroup} from 'reactstrap';
import React, {useContext} from 'react';
import {Form, Input, Row} from '@instinct-prj/frontend';
import {websiteSettingsContext} from '../context/WebsiteSettings';

export function GameSettings() {
  const {config, showSpinner, saveChanges, setConfig} = useContext(
    websiteSettingsContext
  );
  return (
    <Form className="" onSubmit={saveChanges}>
      <h2>Game Settings</h2>
      <FormGroup>
        <h4>Nitro URL</h4>
        <Input
          type="text"
          name="nitroURL"
          onChange={setConfig}
          value={config.nitroURL}
        />
      </FormGroup>
      <FormGroup>
        <h4>Group Badge Folder</h4>
        <Input
          type="text"
          name="groupBadgeURL"
          onChange={setConfig}
          value={config.groupBadgeURL}
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
