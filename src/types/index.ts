export enum PodcastsSectionListType {
  explore = 'explore',
  newSeries = 'newSeries',
  newPodcasts = 'newPodcasts',
  bingeEpisodes = 'bingeEpisodes',
}

export interface PodcastsSectionListData {
  id: string;
  type: PodcastsSectionListType;
}

export enum ExploreSectionListType {
  exclusiveMusicStations = 'exclusiveMusicStations',
  musicThatMoves = 'musicThatMoves',
  sportsForEveryFan = 'SportsForEveryFan',
  theNewsYouNeed = 'theNewsYouNeed',
  yourPassionsOurPodcasts = 'yourPassionsOurPodcasts',
}

export interface ExploreSectionListData {
  id: string;
  type: ExploreSectionListType;
}

export enum HomeSectionListType {
  discover = 'discover',
  stations = 'stations',
  music = 'music',
  addStations = 'addStations',
  sportsPodcasts = 'sportsPodcasts',
}

export interface HomeSectionListData {
  id: string;
  type: HomeSectionListType;
}
