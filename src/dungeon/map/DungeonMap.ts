import { MapId, EntityId } from '../../core/ids';
import { CellDefinition, CellPosition, createCellKey } from './Cell';

// Definition for an entity placement in the dungeon
export interface EntityPlacement {
  position: CellPosition;
  orientation?: 'north' | 'east' | 'south' | 'west';
}

// Definition for a spawn point in the dungeon
export interface SpawnPoint {
  position: CellPosition;
  orientation: 'north' | 'east' | 'south' | 'west';
}

// Definition for the entire dungeon map
export interface DungeonMapDefinition {
  id: MapId;
  cells: CellDefinition[];
  entities: EntityDefinition[];
  spawnPoints: Record<string, SpawnPoint>;
}

// Runtime state for a dungeon map
export interface MapRuntimeState {
  doors: Record<string, { state: 'open' | 'closed'; progress: number }>;
  pickups: Record<EntityId, boolean>; // Whether a pickup has been collected
}

// Helper function to create a map index for quick cell lookup
export function createMapIndex(cells: CellDefinition[]): Map<string, CellDefinition> {
  const index = new Map<string, CellDefinition>();
  for (const cell of cells) {
    const key = createCellKey(cell.position);
    index.set(key, cell);
  }
  return index;
}