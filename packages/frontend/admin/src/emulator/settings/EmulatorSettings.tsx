import {FormGroup} from 'reactstrap';
import {toast} from 'react-toastify';
import React, {useEffect, useState} from 'react';
import {EmulatorLayout} from '../EmulatorLayout';
import {EmulatorSettings as EmulatorSettingsI} from '@instinct-prj/interface';
import {
  emulatorService,
  Form,
  Icon,
  Input,
  setURL,
} from '@instinct-prj/frontend';

setURL('admin/emulator/settings', <EmulatorSettings />);

export function EmulatorSettings() {
  const [spinner, setSpinner] = useState(false);
  const [filter, setFilter] = useState('');
  const [settings, setSettings] = useState<EmulatorSettingsI>();

  useEffect(() => {
    async function fetchSettings() {
      const data = await emulatorService.getSettings();
      setSettings(data);
    }
    fetchSettings();
  }, []);

  function onChange(key: string, value: string) {
    setSettings(_ => {
      const newSettings = [..._!];
      newSettings.find(_ => _.id === key)!.value = value;
      return newSettings;
    });
  }

  async function onSubmit() {
    setSpinner(true);
    await emulatorService.updateSettings(
      settings!.map(_ => ({id: _.id, value: _.value}))
    );
    toast.info('Emulator settings have been updated');
    setSpinner(false);
  }

  return (
    <EmulatorLayout>
      <div className="row">
        <div className="col-6">
          <h2>
            <Icon type="wrench" />
            Emulator Settings
          </h2>
        </div>
        <div className="col-6">
          <h4>Filter By</h4>
          <input
            className="form-control"
            value={filter}
            onChange={e => setFilter(e.target.value.toLowerCase())}
          />
        </div>
      </div>
      <Form className="mt-2" onSubmit={onSubmit}>
        <h3>Server Options</h3>
        {!settings && <Icon className="fa-spin" type="spinner" />}
        <div className="row" style={{maxHeight: 500, overflowY: 'scroll'}}>
          {settings
            ?.filter(_ => _.label.toLowerCase().includes(filter))
            .map(_ => (
              <FormGroup className="col-6" key={_.id}>
                <h4>{_.label}</h4>
                <Input
                  type="text"
                  name={_.id}
                  value={_.value}
                  onChange={onChange}
                />
              </FormGroup>
            ))}
        </div>
        <div className="mt-5 text-right">
          <button className="btn btn-success" disabled={spinner} type="submit">
            {spinner ? <Icon className="fa-spin" type="spinner" /> : <>Save</>}
          </button>
        </div>
      </Form>
    </EmulatorLayout>
  );
}
