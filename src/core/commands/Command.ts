// Base type for all game commands
export type GameCommand =
  | MoveForwardCommand
  | MoveBackwardCommand
  | TurnLeftCommand
  | TurnRightCommand
  | InteractCommand
  | UseItemCommand;

// Command to move the party forward
export interface MoveForwardCommand {
  type: 'move.forward';
}

// Command to move the party backward
export interface MoveBackwardCommand {
  type: 'move.backward';
}

// Command to turn the party left
export interface TurnLeftCommand {
  type: 'turn.left';
}

// Command to turn the party right
export interface TurnRightCommand {
  type: 'turn.right';
}

// Command to interact with an entity (e.g., door, switch, pickup)
export interface InteractCommand {
  type: 'interact';
  entityId: string;
}

// Command to use an item from the inventory
export interface UseItemCommand {
  type: 'use.item';
  itemId: string;
}

// Command bus interface for handling commands
export interface CommandBus {
  dispatch(command: GameCommand): void;
}

// Simple command bus implementation
export class SimpleCommandBus implements CommandBus {
  private handlers: Map<string, (command: GameCommand) => void> = new Map();

  registerHandler(commandType: string, handler: (command: GameCommand) => void): void {
    this.handlers.set(commandType, handler);
  }

  dispatch(command: GameCommand): void {
    const handler = this.handlers.get(command.type);
    if (handler) {
      handler(command);
    }
  }
}