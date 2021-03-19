import React, {useContext} from 'react';
import {Link} from 'wouter';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {makeStyles} from '@material-ui/core/styles';
import {PermissionGuard, sessionContext} from '@instinct-web/core';
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
              <i className="fal fa-newspaper" style={{fontSize: '1.4rem'}} />
            </ListItemIcon>
            <ListItemText>Articles</ListItemText>
          </ListItem>
        </Link>
        <Link to="/community/staff">
          <ListItem button>
            <ListItemIcon>
              <i className="fal fa-users" style={{fontSize: '1.4rem'}} />
            </ListItemIcon>
            <ListItemText>Staff Team</ListItemText>
          </ListItem>
        </Link>
        <Link to="/community/games">
          <ListItem button>
            <ListItemIcon>
              <i className="fal fa-trophy" style={{fontSize: '1.4rem'}} />
            </ListItemIcon>
            <ListItemText>High Scores</ListItemText>
          </ListItem>
        </Link>
        <Link to={`/profile/${user!.username}`}>
          <ListItem button>
            <ListItemIcon>
              <i className="fal fa-user" style={{fontSize: '1.4rem'}} />
            </ListItemIcon>
            <ListItemText>My Profile</ListItemText>
          </ListItem>
        </Link>
        <Link to="/preferences">
          <ListItem button>
            <ListItemIcon>
              <i className="fal fa-cog" style={{fontSize: '1.4rem'}} />
            </ListItemIcon>
            <ListItemText>Security and Privacy</ListItemText>
          </ListItem>
        </Link>
        <ListItem divider style={{borderColor: '#495057'}} />
        <PermissionGuard permission="websiteShowAdminPanel" redirect={false}>
          <Link to="/admin">
            <ListItem button>
              <ListItemIcon>
                <i className="fal fa-cog" style={{fontSize: '1.4rem'}} />
              </ListItemIcon>
              <ListItemText>Admin</ListItemText>
            </ListItem>
          </Link>
        </PermissionGuard>
        <Link to="/logout">
          <ListItem button>
            <ListItemIcon>
              <i className="fal fa-sign-out" style={{fontSize: '1.4rem'}} />
            </ListItemIcon>
            <ListItemText>Logout</ListItemText>
          </ListItem>
        </Link>
      </List>
    </div>
  );
}
