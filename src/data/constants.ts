import {SportsDataInterface, OptionsInterface, CHART_TYPES} from 'types';

export const metrics: OptionsInterface[] = [
  { value: 'attacks', label: 'Attacks' },
  { value: 'defense', label: 'Defense' },
  { value: 'conceded', label: 'Conceded' },
  { value: 'scored', label: 'Scored' },
  { value: 'corners', label: 'Corners' },
  { value: 'freeKicks', label: 'Free Kicks' },
  { value: 'possession', label: 'Possession' },
];



export const charts: OptionsInterface[] = [
  {value: CHART_TYPES.LINE, label: 'Line'},
  {value: CHART_TYPES.BAR, label: 'Bar'},
  {value: CHART_TYPES.RADIAL, label: 'Radial'}
];

export const stats: SportsDataInterface[] = [
  {
    "date": "2024-02-01",
    "attacks": 12,
    "defense": 8,
    "conceded": 2,
    "scored": 4,
    "corners": 5,
    "freeKicks": 10,
    "possession": 50
  },
  {
    "date": "2024-02-15",
    "attacks": 5,
    "defense": 15,
    "conceded": 1,
    "scored": 2,
    "corners": 8,
    "freeKicks": 15,
    "possession": 55
  },
  {
    "date": "2024-03-01",
    "attacks": 18,
    "defense": 10,
    "conceded": 3,
    "scored": 3,
    "corners": 4,
    "freeKicks": 8,
    "possession": 42
  },
  {
    "date": "2024-03-15",
    "attacks": 10,
    "defense": 12,
    "conceded": 2,
    "scored": 1,
    "corners": 6,
    "freeKicks": 18,
    "possession": 60
  },
  {
    "date": "2024-03-29",
    "attacks": 7,
    "defense": 5,
    "conceded": 0,
    "scored": 5,
    "corners": 3,
    "freeKicks": 12,
    "possession": 48
  },
  {
    "date": "2024-04-12",
    "attacks": 14,
    "defense": 6,
    "conceded": 4,
    "scored": 2,
    "corners": 9,
    "freeKicks": 7,
    "possession": 63
  },
  {
    "date": "2024-04-01",
    "attacks": 9,
    "defense": 9,
    "conceded": 1,
    "scored": 3,
    "corners": 2,
    "freeKicks": 20,
    "possession": 58
  },
  {
    "date": "2024-04-05",
    "attacks": 16,
    "defense": 11,
    "conceded": 3,
    "scored": 4,
    "corners": 10,
    "freeKicks": 9,
    "possession": 45
  },
  {
    "date": "2024-04-09",
    "attacks": 4,
    "defense": 14,
    "conceded": 0,
    "scored": 6,
    "corners": 7,
    "freeKicks": 5,
    "possession": 52
  },
  {
    "date": "2024-04-21",
    "attacks": 11,
    "defense": 7,
    "conceded": 2,
    "scored": 0,
    "corners": 6,
    "freeKicks": 14,
    "possession": 60
  }
];