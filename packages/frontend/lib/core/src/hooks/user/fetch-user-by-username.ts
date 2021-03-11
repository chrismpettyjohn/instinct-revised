import {useEffect, useState} from 'react';
import {UserProfile} from '@instinct-prj/interface';
import {userService} from '../../services/user';

export function useFetchUserByUsername(
  username: string
): UserProfile | undefined {
  const [user, setUser] = useState<UserProfile>();

  useEffect(() => {
    setUser(undefined);
    async function fetchUser() {
      const userData = await userService.getByUsername(username);
      setUser(userData);
    }

    fetchUser();
  }, [username]);

  return user;
}
