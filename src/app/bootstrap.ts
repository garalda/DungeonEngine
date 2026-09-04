// Bootstrap file for the DungeonEngine
// Initializes the game and starts the main loop

import { GameState, createInitialGameState } from '../core/state/GameState';
import { SimpleCommandBus } from '../core/commands/Command';
import { SimpleEventBus } from '../core/events/Event';

// Initialize the game state
const initialGameState: GameState = createInitialGameState(
  'gladstone-keep', // Initial map ID
  {
    mapId: 'gladstone-keep',
    cell: { level: 0, row: 0, column: 0 },
    orientation: 'north',
  },
  ['character-1'] // Initial party members
);

// Initialize the command and event buses
const commandBus = new SimpleCommandBus();
const eventBus = new SimpleEventBus();

// Example: Log all events to the console
// eventBus.on('party.moved', (event) => {
//   console.log('Party moved:', event);
// });

// Export initialized instances for use in the application
console.log('DungeonEngine initialized!');
console.log('Initial game state:', initialGameState);

export { initialGameState, commandBus, eventBus };
