import React from 'react';
import {Paper} from '@material-ui/core';
import {setURL} from '@instinct-web/core';
import {Card} from '../../components/card/Card';
import {makeStyles} from '@material-ui/core/styles';
import {UserLayout} from '../../components/layout/user';
import {MiniJumbotron} from '../../components/mini-jumbotron/MiniJumbotron';
import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineConnector,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
} from '@material-ui/lab';
import {ServerUpdate} from './ListUpdates.types';

setURL('updates', <ListUpdates />);

const useStyles = makeStyles(theme => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export function ListUpdates() {
  const classes = useStyles();

  const serverUpdates: ServerUpdate[] = [
    {
      date: 'Feb 23',
      icon: 'vial',
      content: (
        <>
          <h5>Nex Revamp</h5>
          <p>
            We launched the new and improved Nex with a custom website and the
            latest HTML5 browser available, Nitro!
          </p>
        </>
      ),
    },
    {
      date: 'Feb 27',
      icon: 'browser',
      content: (
        <>
          <h5>Nex Desktop</h5>
          <p>
            We launched our new <b>Nex Desktop</b> app! You can use it by
            switching your client type in the top right and following the
            instructions on the download page.
          </p>
        </>
      ),
    },
    {
      date: 'Feb 28',
      icon: 'wrench',
      content: (
        <>
          <h5>Server Updates</h5>
          <p>
            You can now stay up to date with the latest changes by going to the
            new <b>Updates</b> page.
          </p>
          <h5>Who's Online</h5>
          <p>The home page now shows all of the online users.</p>
        </>
      ),
    },
  ];

  return (
    <UserLayout>
      <div className="page-content">
        <MiniJumbotron>
          <h2>Server Updates</h2>
          <p>
            Last Updated:{' '}
            <b>{serverUpdates[serverUpdates.length - 1]?.date ?? 'Never'}</b>
          </p>
        </MiniJumbotron>
        <Card>
          <Timeline align="alternate">
            {serverUpdates.map((update, i) => (
              <TimelineItem key={`update_${i}`}>
                <TimelineOppositeContent>
                  <b>{update.date}</b>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot>
                    <i className={`fa fa-${update.icon} text-dark`} />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.paper}>
                    {update.content}
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Card>
      </div>
    </UserLayout>
  );
}
