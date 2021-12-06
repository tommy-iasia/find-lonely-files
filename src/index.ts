import { writeFile } from "fs/promises";
import { getLonelyFiles } from ".\\getLonelyFiles";

(async function abc() {
  const lonelyFiles = await getLonelyFiles(
    ["..\\..\\211129 WMS Workspace\\fund-web\\src"],
    ["..\\..\\211129 WMS Workspace\\fund-web\\src\\index.tsx"]
  );

  const lonelyScripts = lonelyFiles.filter(
    (t) => t.endsWith(".ts") || t.endsWith(".tsx")
  );

  await writeFile("output.txt", [...lonelyScripts].join("\r\n"));
})();
