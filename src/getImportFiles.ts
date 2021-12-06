import { readFile, stat } from "fs/promises";
import { dirname, join } from "path";
import { getImportText } from "./getImportTexts";

export async function* getImportFiles(scriptPath: string) {
  const scriptText = await readFile(scriptPath, "utf8");

  const importNames = getImportText(scriptText);

  const scriptDirectory = dirname(scriptPath);

  const importPaths = importNames
    .filter((t) => t.startsWith("./") || t.startsWith("../"))
    .map((t) => join(scriptDirectory, t));

  for (const importPath of importPaths) {
    const guessPath = await (async () => {
      const guessPaths = [
        importPath,
        `${importPath}.tsx`,
        `${importPath}.ts`,
        join(importPath, "index.tsx"),
        join(importPath, "index.ts"),
      ];

      for (const guessPath of guessPaths) {
        const guessStat = await stat(guessPath).catch(() => undefined);
        if (guessStat) {
          if (guessStat.isFile()) {
            return guessPath;
          }
        }
      }
    })();

    if (guessPath) {
      yield guessPath;
    } else {
      console.error(`cannot locate file ${importPath}`);
    }
  }
}
