import React from 'react';
import {Skeleton} from '../../generic/skeleton';

export function UserContainerSkeleton() {
  return (
    <div className="member-container">
      <div className="member-content flex-container flex-vertical-center">
        <div
          className="member-avatar flex-container flex-vertical-center flex-horizontal-center"
          style={{overflow: 'hidden'}}
        >
          <Skeleton height={100} width={64} />
        </div>
        <div className="member-details">
          <div className="details-username">
            <Skeleton width={250} height={22} />
          </div>
          <div className="details-motto">
            <Skeleton width={250} height={22} />
          </div>
        </div>
        <div className="member-status flex-container flex-vertical-center flex-horizontal-center">
          <Skeleton width={20} height={20} circle />
        </div>
      </div>
    </div>
  );
}
