import {FormGroup} from 'reactstrap';
import {toast} from 'react-toastify';
import React, {useEffect, useState} from 'react';
import {EmulatorLayout} from '../EmulatorLayout';
import {EmulatorTexts as EmulatorTextsI} from '@instinct-prj/interface';
import {
  emulatorService,
  Form,
  Icon,
  Input,
  setURL,
} from '@instinct-prj/frontend';

setURL('admin/emulator/texts', <EmulatorTexts />);

export function EmulatorTexts() {
  const [spinner, setSpinner] = useState(false);
  const [filter, setFilter] = useState('');
  const [texts, setTexts] = useState<EmulatorTextsI>();

  useEffect(() => {
    async function fetchTexts() {
      const data = await emulatorService.getTexts();
      setTexts(data);
    }
    fetchTexts();
  }, []);

  function onChange(key: string, value: string) {
    setTexts(_ => {
      const newTexts = [..._!];
      newTexts.find(_ => _.id === key)!.value = value;
      return newTexts;
    });
  }

  async function onSubmit() {
    setSpinner(true);
    await emulatorService.updateTexts(
      texts!.map(_ => ({id: _.id, value: _.value}))
    );
    toast.info('Emulator Texts have been updated');
    setSpinner(false);
  }

  return (
    <EmulatorLayout>
      <div className="row">
        <div className="col-6">
          <h2>
            <Icon type="wrench" />
            Emulator Texts
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
        {!texts && <Icon className="fa-spin" type="spinner" />}
        <div className="row" style={{maxHeight: 500, overflowY: 'scroll'}}>
          {texts
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
