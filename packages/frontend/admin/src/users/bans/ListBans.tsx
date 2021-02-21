import React, {useState} from 'react';
import {EditBanModal} from './ban-modals';
import {UsersLayout} from '../UsersLayout';
import {APIWrapper, banService, setURL} from '@instinct-prj/frontend';

setURL('admin/users/bans', <ListBans />);

export function ListBans() {
  const [filter, setFilter] = useState('');
  const [reload, setReload] = useState(0);

  function refreshBans() {
    setReload(_ => _ + 1);
  }

  return (
    <UsersLayout permission="websiteManageBans">
      <h2>Bans</h2>
      <div className="row mb-2">
        <div className="container" style={{width: '98%'}}>
          <input
            className="form-control"
            placeholder="Filter by..."
            onChange={e => setFilter(e.target.value)}
            value={filter}
          />
        </div>
      </div>
      <APIWrapper promise={banService.getAll} params={reload}>
        {bans => {
          const filteredBans = bans.filter(_ =>
            _.user.username.includes(filter)
          );
          return (
            <>
              <div
                className="row"
                style={{overflowY: 'scroll', maxHeight: 600, padding: 10}}
              >
                {filteredBans.map(_ => (
                  <div className="col-lg-6" key={_.id}>
                    <EditBanModal ban={_} onChange={refreshBans} />
                  </div>
                ))}
              </div>
            </>
          );
        }}
      </APIWrapper>
    </UsersLayout>
  );
}
