import { describe, it, expect } from 'vitest';
import { readdirSync, readFileSync } from 'fs';
import { resolve } from 'path';

describe('Architecture', () => {
  it('should not import Babylon outside renderers/babylon', () => {
    const srcDir = resolve(__dirname, '../');
    const forbiddenImports: string[] = [];

    function checkDir(dir: string) {
      const files = readdirSync(dir, { withFileTypes: true });
      for (const file of files) {
        const fullPath = resolve(dir, file.name);
        if (file.isFile() && file.name.endsWith('.ts') && !file.name.endsWith('.d.ts')) {
          const content = readFileSync(fullPath, 'utf-8');
          if (content.includes('from \'BABYLON\'') || content.includes('from "BABYLON"')) {
            if (!fullPath.includes('renderers/babylon')) {
              forbiddenImports.push(fullPath);
            }
          }
        } else if (file.isDirectory()) {
          checkDir(fullPath);
        }
      }
    }

    checkDir(srcDir);
    expect(forbiddenImports).toHaveLength(0);
  });
});