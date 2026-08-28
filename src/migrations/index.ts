import * as migration_20260828_081242_initial from './20260828_081242_initial';

export const migrations = [
  {
    up: migration_20260828_081242_initial.up,
    down: migration_20260828_081242_initial.down,
    name: '20260828_081242_initial'
  },
];
