import React from 'react';
import {
  Card,
  UserContainer,
  UserLayout,
  setURL,
  Skeleton,
  MiniJumbotron,
  useFetchStaffTeam,
} from '@instinct-web/core';

setURL('community/staff', <Staff />);

export function Staff() {
  const staff = useFetchStaffTeam();

  return (
    <UserLayout section="community_team">
      <div className="page-content">
        <div className="row">
          <div className="col-12">
            <MiniJumbotron>
              <div className="row">
                <div className="col-8">
                  <h1>Staff Team</h1>
                  <p>
                    Our staff team works day and night to keep our users safe{' '}
                    <br />
                    and our hotel secure.
                  </p>
                </div>
                <div className="col-4 text-right">
                  <img
                    src="https://www.habborator.org/badges/badges/ADM.gif"
                    style={{marginTop: 10, height: 80}}
                  />
                </div>
              </div>
            </MiniJumbotron>
          </div>
        </div>
        <div className="row">
          {staff !== undefined ? (
            staff!.map(rank => (
              <div className="col-6" key={rank.id} style={{marginBottom: 20}}>
                <Card key={rank.id} header={rank.name}>
                  {rank.users!.map(user => (
                    <div key={user.id} className="mt-4">
                      <UserContainer user={user} />
                    </div>
                  ))}
                </Card>
              </div>
            ))
          ) : (
            <div className="col-6">
              <Card header="Staff">
                <div className="row">
                  <div className="col-2">
                    <Skeleton circle height={100} width={100} />
                  </div>
                  <div className="col-8">
                    <div className="mt-3">
                      <Skeleton width={200} height={20} />
                      <br />
                      <Skeleton width={200} height={20} />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    </UserLayout>
  );
}
