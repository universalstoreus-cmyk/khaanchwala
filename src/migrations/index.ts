import * as migration_20260828_081242_initial from './20260828_081242_initial';
import * as migration_20260828_082026_initial from './20260828_082026_initial';
import * as migration_20260828_082514_initial from './20260828_082514_initial';
import * as migration_20260828_083229_initial from './20260828_083229_initial';
import * as migration_20260828_084441_initial from './20260828_084441_initial';
import * as migration_20260828_091238_initial from './20260828_091238_initial';

export const migrations = [
  {
    up: migration_20260828_081242_initial.up,
    down: migration_20260828_081242_initial.down,
    name: '20260828_081242_initial',
  },
  {
    up: migration_20260828_082026_initial.up,
    down: migration_20260828_082026_initial.down,
    name: '20260828_082026_initial',
  },
  {
    up: migration_20260828_082514_initial.up,
    down: migration_20260828_082514_initial.down,
    name: '20260828_082514_initial',
  },
  {
    up: migration_20260828_083229_initial.up,
    down: migration_20260828_083229_initial.down,
    name: '20260828_083229_initial',
  },
  {
    up: migration_20260828_084441_initial.up,
    down: migration_20260828_084441_initial.down,
    name: '20260828_084441_initial',
  },
  {
    up: migration_20260828_091238_initial.up,
    down: migration_20260828_091238_initial.down,
    name: '20260828_091238_initial'
  },
];
