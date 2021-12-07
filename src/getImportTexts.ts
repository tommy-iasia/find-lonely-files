export function getImportText(scriptText: string) {
  const patterns = [
    /(?:import|export) [\w_-]+, \{[^}]+\} from ["']([^"']+)["'];/g,
    /(?:import|export) [\w_-]+ from ["']([^"']+)["'];/g,
    /(?:import|export) \{[^}]+\} from ["']([^"']+)["'];/g,
    /(?:import|export) \* as [\w_-]+ from ["']([^"']+)["'];/g,
    /(?:import|export) ["']([^"']+)["'];/g,
    /React\.lazy\(\(\) => import\(["']([^"']+)["']\)\)/g,
    /src=["']([^"')]+)["']/g,
    /background-image: url\(["']?([^"')]+)["']?\)/g,
    /border-image-source: url\(["']?([^"')]+)["']?\)/g,
  ];

  return patterns
    .map((pattern) => scriptText.matchAll(pattern))
    .flatMap((t) => [...t])
    .map((t) => t[1]);
}
