// Wish Granter entry runner: copies LAUNCH.json from the bot source directory
// to the expected output directory for the make.fun grader framework.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'LAUNCH.json'), join(OUTPUT_DIR, 'LAUNCH.json'));
} catch (err) {
  console.error(`Error: Failed to copy LAUNCH.json from source directory '${BOT_DIR}' to destination '${OUTPUT_DIR}': ${(err as Error).message}`);
  process.exit(1);
}
