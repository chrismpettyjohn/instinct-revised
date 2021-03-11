import {FormGroup} from 'reactstrap';
import React, {useContext} from 'react';
import {Form, Input} from '@instinct-web/core';
import {websiteSettingsContext} from '../context/WebsiteSettings';

export function WebStoreSettings() {
  const {config, showSpinner, saveChanges, setConfig} = useContext(
    websiteSettingsContext
  );
  return (
    <Form className="" onSubmit={saveChanges}>
      <h2>Web Store Settings</h2>
      <FormGroup>
        <h4>Stripe Public Key</h4>
        <Input
          type="text"
          name="stripePublicKey"
          onChange={setConfig}
          value={config.stripePublicKey}
        />
      </FormGroup>
      <FormGroup>
        <h4>Stripe Secret Key</h4>
        <Input
          type="text"
          name="stripeSecretKey"
          onChange={setConfig}
          value={config.stripeSecretKey}
        />
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
