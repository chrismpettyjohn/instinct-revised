import {Group} from '@instinct-prj/interface';
import {useEffect, useState} from 'react';
import {groupService} from '../../services/group';

export function useFetchGroupByID(groupID: string): Group | undefined {
  const [group, setGroup] = useState<Group>();

  useEffect(() => {
    setGroup(undefined);
    async function fetchGroup() {
      const groupData = await groupService.getByID(groupID);
      setGroup(groupData);
    }

    fetchGroup();
  }, [groupID]);

  return group;
}
