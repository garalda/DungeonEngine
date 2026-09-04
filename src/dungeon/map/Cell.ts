import { CellId } from '../../core/ids';

// Represents a position in the dungeon grid
export interface CellPosition {
  level: number;
  row: number;
  column: number;
}

// Definition for a cell side (e.g., wall, door, open space)
export interface CellSideDefinition {
  texture?: VisualId;
  open?: boolean;
}

// Definition for a cell in the dungeon
export interface CellDefinition {
  id: CellId;
  position: CellPosition;
  floor?: VisualId;
  ceiling?: VisualId;
  sides: {
    north?: CellSideDefinition;
    east?: CellSideDefinition;
    south?: CellSideDefinition;
    west?: CellSideDefinition;
  };
  tags?: string[];
}

// Helper function to create a cell key for indexing
export function createCellKey(position: CellPosition): string {
  return `${position.level}:${position.row}:${position.column}`;
}