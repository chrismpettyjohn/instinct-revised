import './ListUpdates.scss';
import React, {useContext} from 'react';
import {Paper} from '@material-ui/core';
import {Card} from '../../components/card/Card';
import {serverUpdates} from './ListUpdates.const';
import {makeStyles} from '@material-ui/core/styles';
import {UserLayout} from '../../components/layout/user';
import {configContext, setURL} from '@instinct-web/core';
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
