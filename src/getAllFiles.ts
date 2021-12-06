import readDir from "recursive-readdir";

export async function getAllFiles(directories: string[]) {
  const files = await Promise.all(
    directories.map(async (t) => await readDir(t))
  );

  return files.flatMap((t) => t);
}
