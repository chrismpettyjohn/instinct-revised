import React, {useContext} from 'react';
import {Link} from 'wouter';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {makeStyles} from '@material-ui/core/styles';
import {sessionContext} from '@instinct-web/core';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

export function SiteNavigation() {
  const {user} = useContext(sessionContext);
  const classes = makeStyles(() => ({
    root: {
      width: '100%',
      color: 'white',
    },
  }))();

  return (
    <div className={`${classes.root} pl-2`}>
      <List component="nav" aria-label="main mailbox folders">
        <Link to="/community/news">
          <ListItem button>
            <ListItemIcon>
              <i className="fal fa-newspaper fa-2x" />
            </ListItemIcon>
            <ListItemText>Articles</ListItemText>
          </ListItem>
        </Link>
        <Link to="/community/staff">
          <ListItem button>
            <ListItemIcon>
              <i className="fal fa-id-card fa-2x" />
            </ListItemIcon>
            <ListItemText>Staff Team</ListItemText>
          </ListItem>
        </Link>
        <Link to="/community/games">
          <ListItem button>
            <ListItemIcon>
              <i className="fal fa-trophy fa-2x" />
            </ListItemIcon>
            <ListItemText>High Scores</ListItemText>
          </ListItem>
        </Link>
        <Link to={`/profile/${user!.username}`}>
          <ListItem button>
            <ListItemIcon>
              <i className="fal fa-user fa-2x" />
            </ListItemIcon>
            <ListItemText>My Profile</ListItemText>
          </ListItem>
        </Link>
        <Link to="/preferences">
          <ListItem button>
            <ListItemIcon>
              <i className="fal fa-cog fa-2x" />
            </ListItemIcon>
            <ListItemText>Security and Privacy</ListItemText>
          </ListItem>
        </Link>
      </List>
    </div>
  );
}
