import React, {useState} from 'react';
import {UsersLayout} from '../UsersLayout';
import {EditRankModal} from './rank-modals';
import {APIWrapper, rankService, setURL} from '@instinct-prj/frontend';

setURL('admin/users/ranks', <ListRanks />);

export function ListRanks() {
  const [filter, setFilter] = useState('');
  const [counter, setCounter] = useState(1);
  return (
    <UsersLayout permission="websiteManageRanks">
      <h2>Ranks</h2>
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
      <div
        className="row"
        style={{overflowY: 'scroll', maxHeight: 600, padding: 10}}
      >
        <APIWrapper promise={rankService.getAll} params={counter}>
          {ranks => (
            <div
              className="row"
              style={{overflowY: 'scroll', maxHeight: 600, padding: 10}}
            >
              {ranks
                .filter(_ => _.name.includes(filter))
                .map(_ => (
                  <div className="col-lg-4" key={_.id}>
                    <EditRankModal
                      rank={_}
                      onChanges={() => setCounter(counter + 1)}
                    />
                  </div>
                ))}
            </div>
          )}
        </APIWrapper>
      </div>
    </UsersLayout>
  );
}
