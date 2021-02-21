import {User} from '@instinct-prj/interface';
import {useEffect, useState} from 'react';
import {userService} from '../../services/user';

export function useFetchUserByID(userID: string): User | undefined {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    setUser(undefined);
    async function fetchUser() {
      const userData = await userService.getByID(Number(userID));
      setUser(userData);
    }

    fetchUser();
  }, [userID]);

  return user;
}
