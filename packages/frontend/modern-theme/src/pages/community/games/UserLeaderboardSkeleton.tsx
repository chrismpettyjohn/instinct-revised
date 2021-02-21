import React from 'react';
import {Skeleton} from '@instinct-prj/frontend';

export function UserLeaderboardSkeleton() {
  return (
    <tr>
      <td>
        <div className="account-avatar">
          <Skeleton height={100} width={64} />
        </div>
      </td>
      <td>
        <Skeleton height={20} width={80} />
      </td>
      <td>
        <Skeleton height={20} width={60} />
      </td>
    </tr>
  );
}
