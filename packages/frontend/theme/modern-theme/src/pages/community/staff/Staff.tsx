import './Staff.scss';
import React from 'react';
import {Card} from '../../../components/old/card/Card';
import {UserLayout} from '../../../components/layout/user';
import {UserContainer} from '../../../components/old/user-container';
import {MiniJumbotron} from '../../../components/old/mini-jumbotron/MiniJumbotron';
import {setURL, Skeleton, useFetchStaffTeam} from '@instinct-web/core';

setURL('community/staff', <Staff />);

export function Staff() {
  const staff = useFetchStaffTeam();

  return (
    <UserLayout>
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
                    src="/img/staff.gif"
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
              <div
                className="col-6 d-flex align-items-stretch"
                key={rank.id}
                style={{marginBottom: 20}}
              >
                <Card className="flex-fill" key={rank.id} header={rank.name}>
                  {rank.users!.map(user => (
                    <div key={user.id} className="staff-user-container">
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
