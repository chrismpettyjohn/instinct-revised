import React from 'react';
import {Col} from 'reactstrap';
import {setURL} from '@instinct-web/core';
import {Card} from '../components/card/Card';
import {Jumbotron} from '../components/jumbotron/Jumbotron';
import {AdminLayout} from '../components/admin-layout/AdminLayout';

setURL('admin', <Dashboard />);

export function Dashboard() {
  return (
    <AdminLayout permission="websiteShowAdminPanel">
      <Jumbotron style={{background: '#263238'}} title="Admin Panel">
        <p>Welcome to the admin panel</p>
      </Jumbotron>
      <div className="page-content">
        <div className="row">
          <Col xs={6}>
            <Card header="Hotel Statistics">
              <p>Coming soon</p>
            </Card>
            <Card header="Inspirational Video">
              <iframe
                width="100%"
                height={315}
                src="https://www.youtube-nocookie.com/embed/_5lUSTmkM_0?controls=0&amp;"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Card>
          </Col>
          <Col xs={6}>
            <Card header="Diagnostics">
              <p>Coming soon</p>
            </Card>
          </Col>
        </div>
      </div>
    </AdminLayout>
  );
}
