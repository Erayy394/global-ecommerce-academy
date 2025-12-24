#!/usr/bin/env node

/**
 * Verify that the build is ready for Electron packaging
 */

const fs = require("fs");
const path = require("path");

const errors = [];
const warnings = [];

// Check standalone build
const standalonePath = path.join(process.cwd(), ".next", "standalone");
const serverPath = path.join(standalonePath, "server.js");
const nodeModulesPath = path.join(standalonePath, "node_modules");

if (!fs.existsSync(serverPath)) {
  errors.push("❌ .next/standalone/server.js not found. Run 'npm run build:next' first.");
} else {
  console.log("✅ Standalone server.js found");
}

if (!fs.existsSync(nodeModulesPath)) {
  warnings.push("⚠️  .next/standalone/node_modules not found. This might be normal if dependencies are minimal.");
} else {
  console.log("✅ Standalone node_modules found");
}

// Check static files
const staticPath = path.join(process.cwd(), ".next", "static");
if (!fs.existsSync(staticPath)) {
  errors.push("❌ .next/static not found. Run 'npm run build:next' first.");
} else {
  console.log("✅ Static files found");
}

// Check Electron build
const electronMainPath = path.join(process.cwd(), "dist-electron", "main.js");
if (!fs.existsSync(electronMainPath)) {
  errors.push("❌ dist-electron/main.js not found. Run 'npm run build:electron' first.");
} else {
  console.log("✅ Electron main.js found");
}

// Check public folder
const publicPath = path.join(process.cwd(), "public");
if (!fs.existsSync(publicPath)) {
  warnings.push("⚠️  public folder not found.");
} else {
  console.log("✅ Public folder found");
}

// Summary
console.log("\n" + "=".repeat(50));
if (errors.length > 0) {
  console.error("\n❌ Build verification failed:");
  errors.forEach((error) => console.error(`  ${error}`));
  process.exit(1);
}

if (warnings.length > 0) {
  console.warn("\n⚠️  Warnings:");
  warnings.forEach((warning) => console.warn(`  ${warning}`));
}

console.log("\n✅ Build verification passed! Ready for packaging.");
process.exit(0);

