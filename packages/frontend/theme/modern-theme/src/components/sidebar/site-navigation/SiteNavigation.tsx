import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import {makeStyles} from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export function SiteNavigation() {
  const classes = makeStyles(theme => ({
    root: {
      width: '100%',
      color: 'white',
    },
  }))();

  return (
    <div className={`${classes.root} pl-2`}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <i className="fal fa-newspaper fa-2x" />
          </ListItemIcon>
          <ListItemText>Articles</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <i className="fal fa-user fa-2x" />
          </ListItemIcon>
          <ListItemText>My Profile</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <i className="fal fa-cog fa-2x" />
          </ListItemIcon>
          <ListItemText>Security and Privacy</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <i className="fal fa-envelope fa-2x" />
          </ListItemIcon>
          <ListItemText>Private Messages</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <i className="fal fa-heart fa-2x" />
          </ListItemIcon>
          <ListItemText>Moments</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <i className="fal fa-shopping-cart fa-2x" />
          </ListItemIcon>
          <ListItemText>Web Store</ListItemText>
        </ListItem>
      </List>
    </div>
  );
}
