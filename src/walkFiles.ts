import { getImportFiles } from "./getImportFiles";

export async function* walkFiles(entry: string) {
  const walkedFiles = new Set<string>();

  let currentWalkingFiles = [entry];
  while (currentWalkingFiles.length > 0) {
    let nextWalkingFiles = [];

    for (const walkingFile of currentWalkingFiles) {
      if (walkedFiles.has(walkingFile)) {
        continue;
      }

      walkedFiles.add(walkingFile);

      yield walkingFile;

      for await (const importFile of getImportFiles(walkingFile)) {
        nextWalkingFiles.push(importFile);
      }
    }

    currentWalkingFiles = nextWalkingFiles;
  }
}
