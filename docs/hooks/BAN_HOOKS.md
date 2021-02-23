## Ban Hooks

### Fetch All Bans
This hook will return an array of all bans or undefined while waiting on the back-end.
<br/>
**Usage:**
```
import React from 'react';
import { UserBan } from 'instinct-interface';
import { useFetchAllBans } from '@instinct-web/core';

export function ListBans() {
  const bans: UserBan[] | undefined  = useFetchAllBans();

  if (bans === undefined) {
    return <i className="fa fa-spin fa-spinner"/>
  }

  return (
    <>
      {
        bans?.map(_ => (
          <div key={_.id}>
            {_.user.username}
          </div>
        ))
      }
    </>
  )
}
```

### Fetch Ban By ID
This hook will return a news article or return undefined while waiting on the back-end.
<br/>
**Usage:**
```
import React from 'react';
import { useRoute } from 'wouter';
import { UserBan } from 'instinct-interface';
import { useFetchBanByID, setURL } from '@instinct-web/core';

setURL('bans/:banID', <ViewBans/>);

export function ViewBans() {
  const [ matched, params ] = useRoute<{ banID: string }>('/bans/:banID');
  const ban: UserB[] | undefined  = useFetchBanByID(params!.banID);

  if (ban === undefined) {
    return <i className="fa fa-spin fa-spinner"/>
  }

  return (
    <>
      {ban.user.username}
    </>
  )
}
```
