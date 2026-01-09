import http from "http";
import app from "./app.js";
import { initSocket } from "./socket.js";
import dotenv from "dotenv";

dotenv.config();

const server = http.createServer(app);
initSocket(server);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀 Backend running on port ${PORT}`);
});
