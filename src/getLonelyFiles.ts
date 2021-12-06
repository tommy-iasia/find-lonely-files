import { getAllFiles } from "./getAllFiles";
import { walkFiles } from "./walkFiles";

export async function getLonelyFiles(directories: string[], entries: string[]) {
  const allFiles = new Set(await getAllFiles(directories));

  console.log(allFiles);

  for (const entry of entries) {
    for await (const walkedFile of walkFiles(entry)) {
      allFiles.delete(walkedFile);
    }
  }

  console.log(allFiles);

  return [...allFiles];
}
