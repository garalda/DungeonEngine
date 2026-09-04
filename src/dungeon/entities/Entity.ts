import { EntityId, DoorId, VisualId } from '../../core/ids';
import { EntityPlacement } from '../map/DungeonMap';

// Base type for all entity definitions
export type EntityDefinition =
  | DoorDefinition
  | SwitchDefinition
  | PickupDefinition
  | PropDefinition
  | ActorDefinition;

// Definition for a door entity
export interface DoorDefinition {
  kind: 'door';
  id: DoorId;
  placement: EntityPlacement;
  orientation: 'north' | 'east' | 'south' | 'west';
  initialState: 'open' | 'closed';
  blocking: boolean;
  visual: VisualId;
}

// Definition for a switch entity
export interface SwitchDefinition {
  kind: 'switch';
  id: EntityId;
  placement: EntityPlacement;
  actions: ActionDefinition[];
}

// Definition for a pickup entity (e.g., items, gold)
export interface PickupDefinition {
  kind: 'pickup';
  id: EntityId;
  placement: EntityPlacement;
  itemId: string;
  visual: VisualId;
}

// Definition for a prop entity (e.g., decorations, non-interactive objects)
export interface PropDefinition {
  kind: 'prop';
  id: EntityId;
  placement: EntityPlacement;
  visual: VisualId;
}

// Definition for an actor entity (e.g., NPCs, monsters)
export interface ActorDefinition {
  kind: 'actor';
  id: EntityId;
  actorType: string;
  placement: EntityPlacement;
  blocking: boolean;
  visual: VisualId;
}

// Base type for action definitions
export type ActionDefinition =
  | ToggleDoorAction
  | ChangeMapAction
  | ShowTextAction
  | PlaySoundAction
  | GiveItemAction;

// Action to toggle a door
export interface ToggleDoorAction {
  type: 'door.toggle';
  target: DoorId;
}

// Action to change the current map
export interface ChangeMapAction {
  type: 'map.change';
  mapId: string;
  spawnPoint?: string;
}

// Action to show text (e.g., dialogue)
export interface ShowTextAction {
  type: 'text.show';
  text: string;
}

// Action to play a sound
export interface PlaySoundAction {
  type: 'sound.play';
  soundId: string;
}

// Action to give an item to the player
export interface GiveItemAction {
  type: 'item.give';
  itemId: string;
}