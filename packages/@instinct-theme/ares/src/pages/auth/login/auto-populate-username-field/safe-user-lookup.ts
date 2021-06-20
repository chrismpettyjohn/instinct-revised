import {debounce} from 'lodash';
import {userService} from '@instinct-web/core';
import {UserProfile} from '@instinct-prj/interface';

export async function safeUserLookup(
  username?: string
): Promise<UserProfile | undefined> {
  try {
    if (!username) {
      return undefined;
    }
    return await userService.getByUsername(username);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}
