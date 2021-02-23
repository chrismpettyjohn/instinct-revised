import {FormGroup} from 'reactstrap';
import React, {useContext} from 'react';
import {Form, Input, Row} from '@instinct-web/core';
import {websiteSettingsContext} from '../context/WebsiteSettings';

export function MailSettings() {
  const {config, showSpinner, setConfig, saveChanges} = useContext(
    websiteSettingsContext
  );
  return (
    <Form className="" onSubmit={saveChanges}>
      <h2>Email Settings</h2>
      <FormGroup>
        <div className="mt-3" style={{padding: 2}}>
          <h4>SendGrid API Key</h4>
          <Input
            type="text"
            name="sendGridAPIKey"
            onChange={setConfig}
            value={config.sendGridAPIKey}
          />
        </div>
      </FormGroup>
      <FormGroup>
        <div className="mt-3" style={{padding: 2}}>
          <h4>Email Address</h4>
          <Input
            type="text"
            name="sendGridAPISender"
            onChange={setConfig}
            value={config.sendGridAPISender}
          />
        </div>
      </FormGroup>
      <FormGroup className="mt-2">
        <div className="mt-3" style={{padding: 2}}>
          <h4>SendGrid Forgot Password Template</h4>
          <Input
            type="text"
            name="sendGridForgotPasswordTemplate"
            onChange={setConfig}
            value={config.sendGridForgotPasswordTemplate}
          />
        </div>
      </FormGroup>
      <div className="row mt-3">
        <div className="col-6">&nbsp;</div>
        <div className="col-6 text-right">
          <button className="btn btn-primary" disabled={showSpinner}>
            {showSpinner ? <i className="fa fa-spinner fa-spin" /> : 'Save'}
          </button>
        </div>
      </div>
    </Form>
  );
}
