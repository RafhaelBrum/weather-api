import { createClient } from "redis";

const client = createClient();

client.on('error', err => console.log('Redis client error', err));

(async () => {
    await client.connect();
})();

export default client;