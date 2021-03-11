import {FormGroup} from 'reactstrap';
import React, {useContext} from 'react';
import {Form, Input} from '@instinct-web/core';
import {websiteSettingsContext} from '../context/WebsiteSettings';

export function GameSettings() {
  const {config, showSpinner, saveChanges, setConfig} = useContext(
    websiteSettingsContext
  );
  return (
    <Form className="" onSubmit={saveChanges}>
      <h2>Game Settings</h2>
      <FormGroup>
        <h4>Loading Message</h4>
        <Input
          type="text"
          name="loadingMessage"
          onChange={setConfig}
          value={config.loadingMessage}
        />
      </FormGroup>
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
        <h4>Habbo SWF</h4>
        <Input
          type="text"
          name="swfHabbo"
          onChange={setConfig}
          value={config.swfHabbo}
        />
      </FormGroup>
      <FormGroup>
        <h4>SWF Folder</h4>
        <Input
          type="text"
          name="swfBaseURL"
          onChange={setConfig}
          value={config.swfBaseURL}
        />
      </FormGroup>
      <FormGroup>
        <h4>External Variables</h4>
        <Input
          type="text"
          name="swfExternalVariables"
          onChange={setConfig}
          value={config.swfExternalVariables}
        />
      </FormGroup>
      <FormGroup>
        <h4>External Flash Texts</h4>
        <Input
          type="text"
          name="swfExternalTexts"
          onChange={setConfig}
          value={config.swfExternalTexts}
        />
      </FormGroup>
      <FormGroup>
        <h4>Product Data</h4>
        <Input
          type="text"
          name="swfProductData"
          onChange={setConfig}
          value={config.swfProductData}
        />
      </FormGroup>
      <FormGroup>
        <h4>Furnidata</h4>
        <Input
          type="text"
          name="swfFurniData"
          onChange={setConfig}
          value={config.swfFurniData}
        />
      </FormGroup>
      <FormGroup>
        <h4>Figuredata</h4>
        <Input
          type="text"
          name="swfFigureData"
          onChange={setConfig}
          value={config.swfFigureData}
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
      <FormGroup>
        <h4>Group Badge Folder</h4>
        <Input
          type="text"
          name="groupBadgeURL"
          onChange={setConfig}
          value={config.groupBadgeURL}
        />
      </FormGroup>
      <FormGroup>
        <h4>Rank Badge Folder</h4>
        <Input
          type="text"
          name="rankBadgeURL"
          onChange={setConfig}
          value={config.rankBadgeURL}
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
