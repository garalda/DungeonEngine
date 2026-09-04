// Base type for all game events
export type GameEvent =
  | PartyMovedEvent
  | DoorOpenedEvent
  | DoorClosedEvent
  | ItemPickedUpEvent
  | TextShownEvent
  | SoundPlayedEvent;

// Event triggered when the party moves
export interface PartyMovedEvent {
  type: 'party.moved';
  from: { level: number; row: number; column: number };
  to: { level: number; row: number; column: number };
}

// Event triggered when a door is opened
export interface DoorOpenedEvent {
  type: 'door.opened';
  doorId: string;
}

// Event triggered when a door is closed
export interface DoorClosedEvent {
  type: 'door.closed';
  doorId: string;
}

// Event triggered when an item is picked up
export interface ItemPickedUpEvent {
  type: 'item.pickedUp';
  itemId: string;
  entityId: string;
}

// Event triggered when text is shown (e.g., dialogue)
export interface TextShownEvent {
  type: 'text.shown';
  text: string;
}

// Event triggered when a sound is played
export interface SoundPlayedEvent {
  type: 'sound.played';
  soundId: string;
}

// Event bus interface for handling events
export interface EventBus {
  emit(event: GameEvent): void;
  on(eventType: string, handler: (event: GameEvent) => void): void;
}

// Simple event bus implementation
export class SimpleEventBus implements EventBus {
  private handlers: Map<string, ((event: GameEvent) => void)[]> = new Map();

  emit(event: GameEvent): void {
    const eventHandlers = this.handlers.get(event.type);
    if (eventHandlers) {
      for (const handler of eventHandlers) {
        handler(event);
      }
    }
  }

  on(eventType: string, handler: (event: GameEvent) => void): void {
    if (!this.handlers.has(eventType)) {
      this.handlers.set(eventType, []);
    }
    this.handlers.get(eventType)?.push(handler);
  }
}