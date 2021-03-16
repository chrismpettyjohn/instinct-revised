export interface ProfilePreferencesState {
  favoriteYoutubeVideo: string;
  showError: boolean;
  showSpinner: boolean;
  showCompletion: boolean;
}

export const defaultProfilePreferencesState: ProfilePreferencesState = {
  favoriteYoutubeVideo: '',
  showError: false,
  showSpinner: false,
  showCompletion: false,
};
