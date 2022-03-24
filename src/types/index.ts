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

export enum HomeListType {
  discover = 'discover',
  stations = 'stations',
  music = 'music',
  addStations = 'addStations',
  sportsPodcasts = 'sportsPodcasts',
}

export interface HomeData {
  id: string;
  title: string;
  type: HomeListType;
}

export interface SectionListMetaData {
  title?: string;
  data: any[];
}
