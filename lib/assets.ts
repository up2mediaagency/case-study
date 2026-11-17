import fs from "node:fs";
import path from "node:path";

export function checkAvailableImages(paths: string[]): Record<string, boolean> {
  const result: Record<string, boolean> = {};
  for (const publicPath of paths) {
    const cleanPath = publicPath.startsWith("/")
      ? publicPath.slice(1)
      : publicPath;
    const fullPath = path.join(process.cwd(), "public", cleanPath);
    result[publicPath] = fs.existsSync(fullPath);
  }
  return result;
}
