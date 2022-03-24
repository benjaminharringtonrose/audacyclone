import { HomeSectionListType, PodcastsSectionListType } from '../types';

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

export const HOME_SECTIONLIST_DATA = [
  {
    title: 'Discover Your Favorites',
    data: [
      {
        id: '0',
        type: HomeSectionListType.discover,
      },
    ],
  },
  {
    title: 'Your City, Your Stations',
    data: [
      {
        id: '1',
        type: HomeSectionListType.stations,
      },
    ],
  },
  {
    title: 'Featured Music Stations',
    data: [
      {
        id: '2',
        type: HomeSectionListType.music,
      },
    ],
  },
  {
    data: [
      {
        id: '3',
        type: HomeSectionListType.addStations,
      },
    ],
  },
  {
    title: 'Reccomended Sports Podcasts',
    data: [
      {
        id: '4',
        type: HomeSectionListType.sportsPodcasts,
      },
    ],
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
