import {toast} from 'react-toastify';
import React, {useState} from 'react';
import {UsersLayout} from '../UsersLayout';
import {
  betaCodeService,
  Icon,
  setURL,
  useFetchBetaCodes,
} from '@instinct-web/core';

setURL('admin/users/beta-codes', <BetaCodes />);

export function BetaCodes() {
  const [refresh, setRefresh] = useState(0);

  const betaCodes = useFetchBetaCodes(refresh);

  async function createBetaCode() {
    try {
      await betaCodeService.create();
      setRefresh(_ => _ + 1);
      toast.success('A new beta code has been generated');
    } catch {
      toast.error('A beta code could not be generated at this time');
    }
  }

  async function deletaBetaCode(code: string) {
    try {
      await betaCodeService.delete(code);
      setRefresh(_ => _ + 1);
      toast.success('Beta code has been deleted');
    } catch {
      toast.error(`Beta code ${code} could not be deleted at this time`);
    }
  }

  return (
    <UsersLayout permission="websiteManageBetaCodes">
      <div style={{padding: 5}}>
        <h2 className="aside-title">
          <div className="row">
            <div className="col-6">
              <div>Beta Codes</div>
            </div>
            <div className="col-6 text-right">
              <button className="btn btn-success" onClick={createBetaCode}>
                <i className="fa fa-plus-square mr-2" />
                New
              </button>
            </div>
          </div>
        </h2>
        <div className="alert-warning p-3">
          <b>Warning:</b>
          <p>
            Deleting a beta code will revoke access for the redeeming user, if
            any..
          </p>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Beta Code</th>
              <th scope="col">Redeemed By</th>
              <th scope="col">&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {betaCodes?.map(_ => (
              <tr key={_.code}>
                <th>{_.code}</th>
                <td>{_.user?.username}</td>
                <td>
                  <div
                    style={{cursor: 'pointer'}}
                    onClick={() => deletaBetaCode(_.code)}
                  >
                    <Icon className="text-danger" type="trash-alt" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </UsersLayout>
  );
}
