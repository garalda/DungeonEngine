import { MapId, PartyId, FlagId } from '../ids';
import { MapRuntimeState } from '../../dungeon/map/DungeonMap';

// Definition for the party's position in the dungeon
export interface PartyPosition {
  mapId: MapId;
  cell: { level: number; row: number; column: number };
  orientation: 'north' | 'east' | 'south' | 'west';
}

// Definition for the party state
export interface PartyState {
  id: PartyId;
  position: PartyPosition;
  members: CharacterId[];
  gold: number;
}

// Definition for the world state (all maps and their runtime states)
export interface WorldState {
  maps: Record<MapId, MapRuntimeState>;
}

// Main game state interface
export interface GameState {
  world: WorldState;
  party: PartyState;
  activeMap: MapId;
  flags: Record<FlagId, boolean>;
}

// Helper to create an initial game state
export function createInitialGameState(
  initialMapId: MapId,
  initialPartyPosition: PartyPosition,
  initialPartyMembers: CharacterId[]
): GameState {
  return {
    world: { maps: {} },
    party: {
      id: 'party-1',
      position: initialPartyPosition,
      members: initialPartyMembers,
      gold: 0,
    },
    activeMap: initialMapId,
    flags: {},
  };
}