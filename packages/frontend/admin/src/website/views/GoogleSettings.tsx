import {FormGroup} from 'reactstrap';
import React, {useContext} from 'react';
import {Form, Input} from '@instinct-web/core';
import {websiteSettingsContext} from '../context/WebsiteSettings';

export function GoogleSettings() {
  const {config, showSpinner, setConfig, saveChanges} = useContext(
    websiteSettingsContext
  );
  return (
    <Form className="" onSubmit={saveChanges}>
      <h2>Recaptcha Settings</h2>
      <FormGroup>
        <div className="mt-3" style={{padding: 2}}>
          <h4>Captcha Client Key</h4>
          <Input
            type="text"
            name="googleRecaptchaClientKey"
            onChange={setConfig}
            value={config.googleRecaptchaClientKey}
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
