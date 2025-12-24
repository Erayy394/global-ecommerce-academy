import * as fs from "fs";
import * as path from "path";

/**
 * Check if Next.js standalone build exists and is valid
 */
export function checkStandaloneBuild(): { valid: boolean; path: string; error?: string } {
  const possiblePaths = [
    path.join(process.resourcesPath, ".next", "standalone", "server.js"),
    path.join(process.cwd(), ".next", "standalone", "server.js"),
    path.join(
      process.resourcesPath,
      "app.asar.unpacked",
      ".next",
      "standalone",
      "server.js"
    ),
  ];

  for (const serverPath of possiblePaths) {
    if (fs.existsSync(serverPath)) {
      const serverDir = path.dirname(serverPath);
      const nodeModulesPath = path.join(serverDir, "node_modules");

      // Check if node_modules exists (standalone should include it)
      if (fs.existsSync(nodeModulesPath)) {
        return { valid: true, path: serverPath };
      } else {
        return {
          valid: false,
          path: serverPath,
          error: "Standalone build missing node_modules",
        };
      }
    }
  }

  return {
    valid: false,
    path: "",
    error: "Standalone build not found. Please run 'npm run build:next' first.",
  };
}

