import {Link} from 'wouter';
import React, {useContext} from 'react';
import {Button} from '@material-ui/core';
import {configContext} from '@instinct-web/core';

export function EnterHotelButton() {
  const {config} = useContext(configContext);
  return (
    <Link href="/play">
      <Button
        variant="contained"
        color="primary"
        size="large"
        style={{background: '#388E3C'}}
      >
        Enter {config.siteName} Hotel
        <i className="fa fa-arrow-right" style={{marginLeft: 4}} />
      </Button>
    </Link>
  );
}
