import {Photo} from '@instinct-prj/interface';
import {photoService} from '@instinct-web/core';
import React, {useEffect, useState} from 'react';
import {UserLayout} from '../../../components/layout/user';
import {PhotoContainer} from './photo-container/PhotoContainer';
import {defaultPhotosState, PhotosState} from './PhotosInterface';
import {Card, Jumbotron, Loading, setURL} from '@instinct-web/core';

setURL('community/photos', <Photos />);

export function Photos() {
  const [state, setState] = useState<PhotosState>(defaultPhotosState);

  useEffect(() => {
    async function fetchPhotos(): Promise<void> {
      const photos: Photo[] = await photoService.getAll();
      setState({
        photos,
        showSpinner: false,
      });
    }
    fetchPhotos();
  }, []);

  return (
    <UserLayout section="community_photos">
      <Jumbotron title="The best moments in the Hotel">
        <p>All the latest photos from the community.</p>
      </Jumbotron>
      <div className="page-content">
        <Loading isLoading={state.showSpinner}>
          {state.photos.length === 0 && (
            <Card>
              <h3>Hmmm...</h3>
              <p>
                It looks like there aren't any pictures. Maybe you could be the
                first!
              </p>
            </Card>
          )}
          <div className="row">
            <div className="photos-container">
              <div className="photo-container">
                {state.photos.map(photo => (
                  <PhotoContainer key={photo.id} photo={photo} />
                ))}
              </div>
            </div>
          </div>
        </Loading>
      </div>
    </UserLayout>
  );
}
