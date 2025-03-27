import { Redis } from "ioredis"

const client = new Redis();
client.on("connect", () => console.log("✅ Connected to Redis"));
client.on("error", (err) => console.error("❌ Redis error:", err));



export { client }
