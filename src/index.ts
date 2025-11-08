import dotenv from "dotenv";
dotenv.config();
import colors from "colors";
import http from "http";
import { Server } from "socket.io";
import connectDB from "./config/db";
import app from "./app";
// import logger from './utils/logger';

const PROTOCOL = process.env.PROTOCOL; // or https
const HOST = process.env.API_HOST;
const DEFAULT_PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
let currentPort = DEFAULT_PORT;

const server = http.createServer(app);

function startServer(port: number) {
  connectDB()
    .then(() => {
      const s = server.listen(port, () => {
        try {
          console.log(
            colors.yellow(`Server is running at `),
            colors.bgGreen(`${PROTOCOL}://${HOST}:${port}`)
          );
        } catch (err) {
          console.error("Internal Server Error from API Server", err);
        }
      });
      s.on("error", (err: any) => {
        if (err.code === "EADDRINUSE") {
          console.warn(colors.red(`Port ${port} in use, trying next port...`));
          startServer(port + 1);
        } else {
          console.error("Server error:", err);
          process.exit(1);
        }
      });
    })
    .catch((err) => {
      console.log(colors.red(`Failed to connect database`), err.message);
    });
}

startServer(currentPort);
