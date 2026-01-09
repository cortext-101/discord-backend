import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import serverRoutes from "./routes/server.routes.js";
import channelRoutes from "./routes/channel.routes.js";
import messageRoutes from "./routes/message.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/servers", serverRoutes);
app.use("/channels", channelRoutes);
app.use("/messages", messageRoutes);

export default app;
