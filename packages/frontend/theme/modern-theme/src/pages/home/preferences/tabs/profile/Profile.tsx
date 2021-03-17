import React, {useContext, useState} from 'react';
import {Button, TextField} from '@material-ui/core';
import {
  defaultProfilePreferencesState,
  ProfilePreferencesState,
} from './Profile.types';
import {
  Form,
  sessionContext,
  sessionService,
} from '@instinct-web/core';

export function ProfilePreferences() {
  const {user} = useContext(sessionContext);
  const [state, setState] = useState<ProfilePreferencesState>({
    ...defaultProfilePreferencesState,
    favoriteYoutubeVideo: user!.favoriteYoutubeVideo,
  });

  function updateField<K extends keyof ProfilePreferencesState>(
    key: K,
    value: ProfilePreferencesState[K]
  ): void {
    setState({
      ...state,
      [key]: value,
    });
  }

  async function onSubmit(): Promise<void> {
    setState(_ => ({
      ..._,
      showError: false,
      showSpinner: true,
    }));

    try {
      await sessionService.updateProfile(state.favoriteYoutubeVideo);
      updateField('showCompletion', true);
    } catch {
      setState(_ => ({
        ..._,
        showError: true,
        showSpinner: false,
      }));
    }
  }

  if (state.showCompletion) {
    return (
      <div className="text-center">
        <i className="fa fa-thumbs-up fa-5x" />
        <p>Your profile has been updated!</p>
      </div>
    );
  }

  return (
    <Form className="" onSubmit={onSubmit}>
      {state.showError && (
        <div className="alert alert-danger">
          <h4>There was a problem updating your profile</h4>
        </div>
      )}
      <TextField
        color="secondary"
        variant="filled"
        label="Youtube Video"
        placeholder="Enter the url of your favorite Youtube video"
        value={state.favoriteYoutubeVideo}
        onChange={e => updateField('favoriteYoutubeVideo', e.target.value)}
        fullWidth
        style={{marginTop: '2.5%'}}
      />
      <div style={{width: '100%', marginTop: '2.5%', textAlign: 'right'}}>
        <Button color="primary" variant="contained" type="submit">
          {state.showSpinner ? 'Saving Changes...' : ' Save Changes'}
        </Button>
      </div>
    </Form>
  );
}
