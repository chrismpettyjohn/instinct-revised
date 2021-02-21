## Group Hooks

### Fetch Popular Groups
This hook will return an array of the most popular groups or undefined while waiting on the back-end.
<br/>
**Usage:**
```
import React from 'react';
import { Group } from 'instinct-interface';
import { useFetchPopularGroups } from '@instinct-prj/frontend';

export function ListGroups() {
  const groups: Group[] | undefined  = useFetchPopularGroups();

  if (groups === undefined) {
    return <i className="fa fa-spin fa-spinner"/>
  }

  return (
    <>
      {
        groups?.map(_ => (
          <div key={_.id}>
            {_.name}
          </div>
        ))
      }
    </>
  )
}
```

### Fetch Group By ID
This hook will return a group or return undefined while waiting on the back-end.
<br/>
**Usage:**
```
import React from 'react';
import { useRoute } from 'wouter';
import { Group } from 'instinct-interface';
import { useFetchGroupByID, setURL } from '@instinct-prj/frontend';

setURL('groups/:groupID', <ViewGroup/>);

export function ViewGroup() {
  const [ matched, params ] = useRoute<{ groupID: string }, '/groups/:groupID');
  const group: Group | undefined  = useFetchGroupByID(params!.groupID);

  if (group === undefined) {
    return <i className="fa fa-spin fa-spinner"/>
  }

  return (
    <>
     {group.name}
    </>
  )
}
```
