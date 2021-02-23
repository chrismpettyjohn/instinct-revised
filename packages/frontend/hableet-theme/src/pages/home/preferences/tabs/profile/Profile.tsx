import React, {useContext, useState} from 'react';
import {
  defaultProfilePreferencesState,
  ProfilePreferencesState,
} from './Profile.types';
import {
  Form,
  Icon,
  Input,
  Row,
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
      <div>
        <h4 className="form-subcategory">Youtube Video</h4>
        <Row>
          <div className="column-2">
            <Input
              type="text"
              name="favoriteYoutubeVideo"
              value={state.favoriteYoutubeVideo}
              onChange={updateField}
            />
          </div>
        </Row>
      </div>

      <div className="submit-button">
        <button className="rounded-button grey" type="submit">
          {state.showSpinner ? (
            <Icon className="fa-spin" type="spinner" />
          ) : (
            'Save'
          )}
        </button>
      </div>
    </Form>
  );
}
