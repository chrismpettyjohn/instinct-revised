import {FormGroup} from 'reactstrap';
import React, {useState} from 'react';
import {UsersLayout} from '../UsersLayout';
import {EditUserModal} from './edit-user-modal';
import {
  APIWrapper,
  createFetchHook,
  Icon,
  manageUsersService,
  setURL,
} from '@instinct-prj/frontend';

setURL('admin/users', <ListUsers />);

export function ListUsers() {
  const [filter, setFilter] = useState('');
  const [refresh, setRefresh] = useState(0);
  const users = createFetchHook(manageUsersService.getAll, refresh);

  function onUpdated() {
    setRefresh(_ => _ + 1);
  }

  return (
    <UsersLayout permission="websiteManageUsers">
      <h2>Users</h2>
      <FormGroup>
        <h4>Filter By</h4>
        <input
          className="form-control"
          value={filter}
          onChange={e => setFilter(e.target.value.toLowerCase())}
        />
      </FormGroup>
      <APIWrapper promise={manageUsersService.getAll} params={refresh}>
        {users => (
          <div
            className="row mt-5"
            style={{maxHeight: 500, overflowY: 'scroll'}}
          >
            {!users && <Icon className="fa-spin" type="spinner" />}
            {users
              ?.filter(_ => _.username.toLowerCase().includes(filter))
              .map(_ => (
                <div className="col-4" key={_.id}>
                  <EditUserModal user={_} onUpdated={onUpdated} />
                </div>
              ))}
          </div>
        )}
      </APIWrapper>
    </UsersLayout>
  );
}
