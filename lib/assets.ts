import fs from "node:fs";
import path from "node:path";

export function checkAvailableImages(paths: string[]): Record<string, boolean> {
  const publicAssetsRoot = path.join(process.cwd(), "public", "case-studies");
  const hasLocalPublicDir = fs.existsSync(publicAssetsRoot);

  const result: Record<string, boolean> = {};
  for (const publicPath of paths) {
    if (!hasLocalPublicDir) {
      result[publicPath] = true;
      continue;
    }
    const cleanPath = publicPath.startsWith("/")
      ? publicPath.slice(1)
      : publicPath;
    const fullPath = path.join(process.cwd(), "public", cleanPath);
    result[publicPath] = fs.existsSync(fullPath);
  }
  return result;
}
