import { describe, it, expect } from 'vitest';
import { CellDefinition, createCellKey, CellPosition } from '../Cell';
import { DungeonMapDefinition, createMapIndex } from '../DungeonMap';

describe('DungeonMap', () => {
  it('should create a map index with correct cell keys', () => {
    const cells: CellDefinition[] = [
      {
        id: 'cell-1',
        position: { level: 0, row: 0, column: 0 },
        sides: {},
      },
      {
        id: 'cell-2',
        position: { level: 0, row: 0, column: 1 },
        sides: {},
      },
      {
        id: 'cell-3',
        position: { level: 1, row: 0, column: 0 },
        sides: {},
      },
    ];

    const index = createMapIndex(cells);

    expect(index.size).toBe(3);
    expect(index.get('0:0:0')?.id).toBe('cell-1');
    expect(index.get('0:0:1')?.id).toBe('cell-2');
    expect(index.get('1:0:0')?.id).toBe('cell-3');
  });

  it('should validate a map with 45 cells', () => {
    const cells: CellDefinition[] = Array.from({ length: 45 }, (_, i) => ({
      id: `cell-${i}`,
      position: { level: 0, row: Math.floor(i / 5), column: i % 5 },
      sides: {},
    }));

    const map: DungeonMapDefinition = {
      id: 'gladstone-keep',
      cells,
      entities: [],
      spawnPoints: {},
    };

    expect(map.cells).toHaveLength(45);
    expect(map.entities).toHaveLength(0);
    expect(Object.keys(map.spawnPoints)).toHaveLength(0);
  });
});