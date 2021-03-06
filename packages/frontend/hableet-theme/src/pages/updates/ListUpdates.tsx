import React, {useContext} from 'react';
import './ListUpdates.scss';
import {Paper} from '@material-ui/core';
import {configContext, setURL} from '@instinct-web/core';
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
    background: '#001726',
    color: 'white',
    fontSize: 16,
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export function ListUpdates() {
  const {config} = useContext(configContext);
  const classes = useStyles();

  const serverUpdates: ServerUpdate[] = [
    {
      date: 'Mar 04',
      icon: 'sparkles',
      content: (
        <>
          <h5>Website Improvements</h5>
          <ul>
            <li>FindRetros Voting implemented</li>
            <li>Revamped Staff Page</li>
            <li>Revamped High Scores Page</li>
          </ul>
        </>
      ),
    },
    {
      date: 'Feb 29',
      icon: 'bug',
      content: (
        <>
          <h5>Bug fixes</h5>
          <ul>
            <li>Flash client crashing in some rooms</li>
            <li>Flash application blue screen freeze</li>
            <li>Page title showing "Habbo"</li>
          </ul>
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
  ];

  return (
    <UserLayout>
      <div className="page-content">
        <MiniJumbotron>
          <h2>Server Updates</h2>
          <p>
            Here at {config.siteName}, we strive to provide a safe, fast and fun
            experience for all users. As apart of this, we are always improving
            our services and listening to the feedback of you, the user.
          </p>
          <p>
            If you have any concerns, please reach out to a staff member or via
            our <b>#bug-reports</b> channel on Discord.
          </p>
          <p>
            Last Updated: <b>{serverUpdates[0]?.date ?? 'Never'}</b>
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
                <TimelineContent className="update-block">
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
