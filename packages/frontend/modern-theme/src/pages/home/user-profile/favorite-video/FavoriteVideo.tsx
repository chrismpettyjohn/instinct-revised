import React from 'react';
import {Card} from '@instinct-prj/frontend';
import {UserProfileWidgetProps} from '../UserProfile.types';

export function FavoriteVideo({profile}: UserProfileWidgetProps) {
  if (!profile) {
    return <i className="fa fa-spinner fa-spin" />;
  }

  return (
    <Card header="Favorite Video">
      <iframe
        width={290}
        height={235}
        src={`https://www.youtube-nocookie.com/embed/${
          profile!.user!.favoriteYoutubeVideo
        }?controls=0`}
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Card>
  );
}
