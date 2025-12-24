import { app, BrowserWindow } from "electron";
import { spawn, ChildProcess } from "child_process";
import * as path from "path";
import * as fs from "fs";
import { findPort } from "./utils/findPort";
import { checkStandaloneBuild } from "./utils/checkStandalone";

let mainWindow: BrowserWindow | null = null;
let nextServer: ChildProcess | null = null;
let serverPort: number = 3000;

const isDev = process.env.NODE_ENV === "development";
const isPackaged = app.isPackaged;

// Next.js server path (production only)
function getNextServerPath(): string {
  // Production: use standalone server
  // In packaged app, extraResources are in process.resourcesPath
  const standalonePath = path.join(process.resourcesPath, ".next", "standalone");
  const serverPath = path.join(standalonePath, "server.js");
  
  // Check if file exists
  if (fs.existsSync(serverPath)) {
    return serverPath;
  }
  
  // Fallback 1: Check if in development build location
  const devPath = path.join(process.cwd(), ".next", "standalone", "server.js");
  if (fs.existsSync(devPath)) {
    return devPath;
  }
  
  // Fallback 2: Check app.asar.unpacked (if asar is used)
  const asarUnpackedPath = path.join(
    process.resourcesPath,
    "app.asar.unpacked",
    ".next",
    "standalone",
    "server.js"
  );
  if (fs.existsSync(asarUnpackedPath)) {
    return asarUnpackedPath;
  }
  
  // If none found, return the expected path (will show error if not found)
  return serverPath;
}

// Start Next.js server
async function startNextServer(): Promise<number> {
  return new Promise(async (resolve, reject) => {
    try {
      // Find available port
      const port = await findPort(3000);
      serverPort = port;

      if (isDev) {
        // Development mode: use next dev
        const nextBin = path.join(process.cwd(), "node_modules", ".bin", "next");
        const isWindows = process.platform === "win32";
        const command = isWindows ? `${nextBin}.cmd` : nextBin;
        
        nextServer = spawn(command, ["dev", "-p", port.toString()], {
          cwd: process.cwd(),
          env: { ...process.env, PORT: port.toString() },
          stdio: "inherit",
          shell: isWindows,
        });
      } else {
        // Production mode: use standalone server
        // First, check if standalone build exists and is valid
        const standaloneCheck = checkStandaloneBuild();
        
        if (!standaloneCheck.valid) {
          reject(new Error(standaloneCheck.error || "Standalone build not found"));
          return;
        }
        
        const serverPath = standaloneCheck.path;
        const serverDir = path.dirname(serverPath);
        
        // Set PORT environment variable and ensure NODE_ENV is production
        const env = {
          ...process.env,
          PORT: port.toString(),
          NODE_ENV: "production",
        };

        // Use Electron's bundled Node.js runtime
        const nodeExecutable = process.execPath;
        
        console.log(`Starting Next.js server from: ${serverDir}`);
        console.log(`Using Node: ${nodeExecutable}`);
        
        nextServer = spawn(nodeExecutable, [serverPath], {
          cwd: serverDir,
          env,
          stdio: "inherit",
        });
      }

      nextServer.on("error", (error) => {
        console.error("Failed to start Next.js server:", error);
        reject(error);
      });

      nextServer.on("exit", (code) => {
        console.log(`Next.js server exited with code ${code}`);
        if (code !== 0 && code !== null) {
          reject(new Error(`Server exited with code ${code}`));
        }
      });

      // Wait for server to be ready
      const maxAttempts = 30;
      let attempts = 0;

      const checkServer = setInterval(() => {
        attempts++;
        const http = require("http");
        const req = http.get(`http://localhost:${port}`, (res: any) => {
          clearInterval(checkServer);
          console.log(`Next.js server is ready on port ${port}`);
          resolve(port);
        });

        req.on("error", () => {
          if (attempts >= maxAttempts) {
            clearInterval(checkServer);
            reject(new Error("Server failed to start within timeout"));
          }
        });

        req.end();
      }, 1000);
    } catch (error) {
      reject(error);
    }
  });
}

// Create Electron window
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: true,
    },
    icon: isPackaged
      ? path.join(process.resourcesPath, "public", "favicon.ico")
      : path.join(process.cwd(), "public", "favicon.ico"),
  });

  // Load the app
  mainWindow.loadURL(`http://localhost:${serverPort}`);

  // Open DevTools in development
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

// App event handlers
app.whenReady().then(async () => {
  try {
    // Create user data directory for future export/import features
    const userDataPath = app.getPath("userData");
    const dataDir = path.join(userDataPath, "data");
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    console.log("User data directory:", dataDir);

    await startNextServer();
    createWindow();

    app.on("activate", () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
      }
    });
  } catch (error) {
    console.error("Failed to start application:", error);
    
    // Show error window
    const errorWindow = new BrowserWindow({
      width: 600,
      height: 400,
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
      },
    });

    errorWindow.loadURL(
      `data:text/html;charset=utf-8,${encodeURIComponent(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>Hata</title>
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100vh;
                margin: 0;
                background: #f3f4f6;
              }
              .error-container {
                text-align: center;
                padding: 2rem;
                background: white;
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0,0,0,0.1);
              }
              h1 { color: #dc2626; margin-bottom: 1rem; }
              p { color: #6b7280; }
            </style>
          </head>
          <body>
            <div class="error-container">
              <h1>❌ Uygulama Başlatılamadı</h1>
              <p>Next.js sunucusu başlatılamadı.</p>
              <p style="font-size: 0.875rem; margin-top: 1rem;">Hata: ${error}</p>
            </div>
          </body>
        </html>
      `)}`
    );
  }
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("before-quit", () => {
  // Kill Next.js server process
  if (nextServer) {
    nextServer.kill();
    nextServer = null;
  }
});

