import { writeFile } from "fs/promises";
import { getLonelyFiles } from ".\\getLonelyFiles";

(async function abc() {
  const lonelyFiles = await getLonelyFiles(
    ["..\\..\\211129 WMS Workspace\\fund-web\\src"],
    ["..\\..\\211129 WMS Workspace\\fund-web\\src\\index.tsx"]
  );

  await writeFile("output.txt", [...lonelyFiles].join("\r\n"));
})();
