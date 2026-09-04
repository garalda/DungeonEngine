# DungeonEngine

A **TypeScript/JavaScript engine** for classic first-person dungeon RPG games, inspired by *Lands of Lore*, *Eye of the Beholder*, *Dungeon Master*, and *Legend of Grimrock*.

---

## 🎯 **Goals**
- **Modular architecture**: Separation of concerns (Game Core, Dungeon Gameplay, RPG Rules, Presentation API, Platform Adapters).
- **Renderer-agnostic**: Start with Babylon.js, but designed to support custom WebGL/WebGPU renderers.
- **Testable**: Headless game logic with deterministic commands and events.
- **Extensible**: Support for multiple game packs (e.g., *Lands of Lore*, *Eye of the Beholder*).

---

## 📦 **Project Structure**

```text
src/
├── core/               # Game Core (state, events, commands, time, save)
│   ├── commands/
│   ├── events/
│   ├── state/
│   └── ids.ts
│
├── dungeon/            # Dungeon Gameplay (movement, doors, actors, triggers)
│   ├── map/
│   ├── movement/
│   ├── interaction/
│   └── entities/
│
├── rpg/                # RPG Rules (character, stats, inventory, combat)
│   ├── character/
│   ├── items/
│   └── combat/
│
├── presentation/       # Presentation API (renderer, audio, input, UI ports)
│   ├── renderer/
│   ├── audio/
│   └── input/
│
├── renderers/          # Platform-specific renderers
│   └── babylon/        # Babylon.js renderer (first implementation)
│
├── games/              # Game Packs (Lands of Lore, Eye of the Beholder, etc.)
│   └── lands-of-lore/
│
└── app/                # Main application bootstrap
    └── bootstrap.ts
```

---

## 🚀 **Getting Started**

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/garalda/DungeonEngine.git
   cd DungeonEngine
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Run tests:
   ```bash
   npm test
   ```

5. Lint and format code:
   ```bash
   npm run lint
   npm run format
   ```

---

## 🛠 **Scripts**

| Script       | Description                          |
|--------------|--------------------------------------|
| `npm run dev` | Start Vite development server        |
| `npm run build` | Build for production               |
| `npm run preview` | Preview production build          |
| `npm test`   | Run tests with Vitest               |
| `npm run lint` | Lint with ESLint                    |
| `npm run format` | Format code with Prettier         |

---

## 🏗 **Architecture Principles**

1. **Dependency Direction**: Higher layers (e.g., *Game Packs*) depend on lower layers (e.g., *Game Core*), but **never the reverse**.
   Example:
   ```text
   Lands of Lore → Dungeon Gameplay → Game Core → IRenderer → BabylonRenderer
   ```

2. **Game Core Independence**: The `Game Core` must **not** depend on any renderer (e.g., Babylon.js).

3. **Command & Event Model**:
   - **Commands** (e.g., `MoveForwardCommand`) modify the `GameState`.
   - **Events** (e.g., `PartyMovedEvent`) are emitted to notify systems (e.g., renderer) of changes.

4. **Immutable Definitions**: Map and entity definitions are **immutable** and separate from runtime state.

---

## 📜 **Roadmap**

### Milestone 1: Headless Dungeon Engine
- [ ] Core types (`CellPosition`, `Direction`, `DungeonMapDefinition`)
- [ ] Load and validate Gladstone Keep map
- [ ] Movement system (commands + tests)
- [ ] Interaction system (doors, switches)

### Milestone 2: Playable Gladstone Slice
- [ ] Babylon.js renderer skeleton
- [ ] Basic rendering (floor, ceiling, walls, camera)
- [ ] Animated movement
- [ ] Entity rendering (doors, switches, actors)
- [ ] Picking (interaction with entities)

### Milestone 3: RPG Engine
- [ ] Party and character system
- [ ] Inventory and items
- [ ] Combat system
- [ ] Spells and effects

### Milestone 4: Full Lands of Lore Support
- [ ] Complete Gladstone Keep implementation
- [ ] Second map (Northland Forest)
- [ ] Save/Load system

### Milestone 5: Renderer Independence
- [ ] Freeze `DungeonRenderer` API
- [ ] Custom WebGL renderer
- [ ] Decide on Babylon.js future

---

## 🤝 **Contributing**
Contributions are welcome! Please open an issue or submit a pull request.

---

## 📄 **License**
[MIT](LICENSE)