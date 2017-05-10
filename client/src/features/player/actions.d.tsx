import {Artist, Album, Track} from 'definitions';

interface PlayerActionBase {
  type: string;
};

interface PlayNextAction {
  type: 'cassette/player/PLAY_NEXT_ACTION';
}

interface PlayPreviousAction {
  type: 'cassette/player/PLAY_PREVIOUS_ACTION';
}

interface ReplacePlayerStackAction {
  type: 'cassette/player/REPLACE_PLAYER_STACK_ACTION';
  stack: Track[];
}

interface ClearPlaylistAction {
  type: 'cassette/player/CLEAR_PLAYLIST_ACTION';
}

interface TogglePlaybackAction {
  type: 'cassette/player/TOGGLE_PLAYBACK_ACTION';
}

interface PlayAfterAction {
  type: 'cassette/player/PLAY_AFTER_ACTION';
  stack: Track[];
}

export type PlayerAction =  PlayNextAction |
                            PlayPreviousAction |
                            ReplacePlayerStackAction |
                            ClearPlaylistAction |
                            TogglePlaybackAction |
                            PlayAfterAction;

// Album | [Album, number] | Track[] | Track

export type PlayerStack = Album | [string, number] | Track[] | Track;

export type PlayerActions = {
  playNext: (index?: number) => void;
  playPrevious: () => void;
  replacePlayerStack: (stack: PlayerStack) => void;
  clearPlaylist: () => void;
  togglePlayback: () => void;
  playAfter: (stack: PlayerStack) => void;
}