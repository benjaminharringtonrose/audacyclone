import {
  ExploreSectionListType,
  HomeListType,
  PodcastsSectionListType,
} from '../types';

export const PODCASTS_SECTIONLIST_DATA = [
  {
    title: 'Explore Podcasts',
    data: [
      {
        id: '0',
        type: PodcastsSectionListType.explore,
      },
    ],
  },
  {
    title: 'New Series from NPR',
    data: [
      {
        id: '1',
        type: PodcastsSectionListType.newSeries,
      },
    ],
  },
  {
    title: 'New Podcasts on Audacy',
    data: [
      {
        id: '2',
        type: PodcastsSectionListType.newPodcasts,
      },
    ],
  },
  {
    title: 'Binge All Episodes Now',
    data: [
      {
        id: '1',
        type: PodcastsSectionListType.newSeries,
      },
    ],
  },
];

export const EXPLORE_PODCASTS_DATA = [
  { id: '0', title: 'Art' },
  { id: '1', title: 'Business' },
  { id: '2', title: 'Comedy' },
  { id: '3', title: 'Education' },
  { id: '4', title: 'Entertainment' },
];

export const NEW_PODCASTS_DATA = [
  { id: '0', title: 'Ultimate College', subtitle: 'Basketball...' },
  { id: '1', title: 'HBO Docs Club', subtitle: '' },
  { id: '2', title: 'Very Scary People', subtitle: '' },
  { id: '3', title: 'Best Friends Back, Alright!', subtitle: '' },
];

export const HOME_DATA = [
  {
    id: '0',
    title: 'Discover Your Favorites',
    type: HomeListType.discover,
  },
  {
    id: '1',
    title: 'Your City, Your Stations',
    type: HomeListType.stations,
  },
  {
    id: '2',
    title: 'Featured Music Stations',
    type: HomeListType.music,
  },
  {
    id: '3',
    title: '',
    type: HomeListType.addStations,
  },
  {
    id: '4',
    title: 'Reccomended Sports Podcasts',
    type: HomeListType.sportsPodcasts,
  },
];

export const FAVORITES_DATA = [
  { id: '0', title: 'Exclusive Stations' },
  { id: '1', title: 'Music' },
  { id: '2', title: 'Sports' },
  { id: '3', title: 'News & Talk' },
  { id: '4', title: 'Podcasts' },
];

export const STATIONS_DATA = [
  { id: '0', title: 'CBS Sports Radio', subtitle: 'CBS Sports Radio' },
  { id: '1', title: 'CNN', subtitle: 'The Most Trusted..' },
  { id: '2', title: 'HLN', subtitle: 'News that hits ho..' },
  { id: '3', title: 'CNN Español', subtitle: 'El nombre mas c..' },
];

export const MUSIC_STATIONS_DATA = [
  { id: '0', title: 'She Sings', subtitle: 'Celebrating the p..' },
  { id: '1', title: 'Justin Beiber Radio', subtitle: 'Listen up if you lo..' },
  { id: '2', title: 'Women that Rock', subtitle: 'Women that Rock' },
];

export const EXPLORE_SECTIONLIST_DATA = [
  {
    title: 'Exclusive Music Stations',
    data: [
      {
        id: '0',
        type: ExploreSectionListType.exclusiveMusicStations,
      },
    ],
  },
  {
    title: 'Music That Moves',
    data: [
      {
        id: '1',
        type: ExploreSectionListType.musicThatMoves,
      },
    ],
  },
  {
    title: 'Sports for Every Fan',
    data: [
      {
        id: '2',
        type: ExploreSectionListType.sportsForEveryFan,
      },
    ],
  },
  {
    title: 'The News You Need',
    data: [
      {
        id: '3',
        type: ExploreSectionListType.theNewsYouNeed,
      },
    ],
  },
  {
    title: 'Your Passions Our Podcasts',
    data: [
      {
        id: '4',
        type: ExploreSectionListType.yourPassionsOurPodcasts,
      },
    ],
  },
];
