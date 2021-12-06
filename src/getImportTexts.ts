export function getImportText(scriptText: string) {
  const matches = [
    scriptText.matchAll(/import [\w_-]+ from ["']([^"']+)["'];/g),
    scriptText.matchAll(/import \{[^}]+\} from ["']([^"']+)["'];/g),
    scriptText.matchAll(/import \* as [\w_-]+ from ["']([^"']+)["'];/g),
    scriptText.matchAll(/React\.lazy\(\(\) => import\(["']([^"']+)["']\)\)/g),
  ];

  return matches.flatMap((t) => [...t]).map((t) => t[1]);
}
