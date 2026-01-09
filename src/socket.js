import { Server } from "socket.io";
import prisma from "./prisma.js";

export function initSocket(server) {
  const io = new Server(server, {
    cors: { origin: "*" }
  });

  io.on("connection", socket => {
    socket.on("join-channel", channelId => {
      socket.join(channelId);
    });

    socket.on("send-message", async ({ content, userId, channelId }) => {
      const message = await prisma.message.create({
        data: { content, userId, channelId }
      });

      io.to(channelId).emit("new-message", message);
    });
  });
}
