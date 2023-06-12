import * as dotenv from "dotenv";
dotenv.config({ path: "./.env" });

// Exit if compiler failed.
process.on("uncaughtException", (err: Error) => {
  console.log("Uncaught Exception! Shutting down...");
  process.exit(1);
});

import app from "./app";
import { Server } from "http";

let port: number = parseInt(process.env.PORT) || 5000;
const host: string = process.env.HOST || "0.0.0.0";

const server: Server = app
  .listen(port, host)
  .on("error", async function (e: { code: string }): Promise<void> {
    if (e.code !== "EADDRINUSE" && e.code !== "EACCES") {
      throw e;
    }
    console.log("Port " + port + " is busy. Trying the next available port...");
    // await database
    app.listen(++port);
    console.log(`Listening on http://${host}:${port}`);
  })
  .on("listening", async function (): Promise<void> {
    // await datbase
    console.log(`Listening on http://${host}:${port}`);
  });

// Catches any missed error
process.on("unhandledRejection", (err: Error) => {
  console.log("Unhandled Rejection! Shutting down...");
  console.error(err);
  server.close(() => {
    process.exit(1);
  });
});
