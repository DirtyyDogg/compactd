import * as Compactd from './common.d';
import {MusicContentState} from 'app/content-decorator';
import {DSAlbum, DSArtist, DSTrack, DSEntity, Library, Tracker, Release} from 'compactd-models';

export interface LibraryState {
  topTracks: {key: string, value: number}[],
  tracksById: {
    [id: string]: Compactd.Track
  }
  albumsById: {
    [id: string]: Compactd.Album & {
      tracks?: [Compactd.Track & {offerRemove?: boolean}]
    }
  };
  artistsById: {
    [id: string]: Compactd.Artist & {albums?: string[]}
  };
  albums: string[];
  artists: string[];
  tracks: Compactd.Track[];
  expandArtists: boolean;
  counters: {
    [id: string]: {
      tracks: number;
      albums?: number;
    }
  }
}

export interface AppState {
  loggingIn?: boolean;
  /**
   * Whether the app is loading the state
   */
  loading: boolean;
  /**
   * Whether app has been configured, and server is ready to be used
   */
  configured: boolean;
  /**
   * Is the app loading, syncing the databases?
   */
  syncing: boolean;
  /**
   * Syncing progress between  0 and 1
   */
  syncingProgress?: number;
  synced: boolean;
  /**
   * Logged in user
   */
  user?: string;
}

export interface PlayerState extends MusicContentState {
  /**
   * An array containing a list of the next tracks
   */
  stack: Compactd.Track[];
  /**
   * Previously-player tracks
   */
  prevStack: Compactd.Track[];
  /**
   * Is it playing right now?
   */
  playing:    boolean;
}

export interface StoreState {
  search: string;
  showSearchDialog: boolean;
  showDowloadPopup: boolean;
  searchResultsByQuery: {
    [q: string]: {
      artist?: DSArtist[],
      album?: DSAlbum[],
      track?: DSTrack[] 
    }
  };
  scope: 'artist' | 'album' | 'search' | 'results';
  artist: string;
  album: string;
  resultsById: {
    [name: string]: Release[]
  }
  artistsById: {
    [name: string]: DSArtist
  };
  albumsById: {
    [name: string]: DSAlbum
  },
  downloadsById: {
    [id: string]: {
      id: string;
      hash: string;
      name: string;
      progress: number;
      done: boolean;
    }
  }
}

export interface SettingsState {
  scanning: boolean;
  opened: boolean;
  libraries?: Library[];
  trackers?: Tracker[];
}

export interface CompactdState {
  library: LibraryState;
  player: PlayerState;
  app: AppState;
  store: StoreState;
  settings: SettingsState;
}
