import { createServer } from "node:http";
import worker from "./worker/index.js";

const port = process.env.PORT || 3000;

createServer(async (req, res) => {
  try {
    const response = await worker.fetch();
    res.writeHead(response.status, Object.fromEntries(response.headers));
    res.end(Buffer.from(await response.arrayBuffer()));
  } catch (err) {
    console.error(err);
    res.writeHead(500);
    res.end("Internal Server Error");
  }
}).listen(port, () => {
  console.log(`zvolta-driver-guide listening on port ${port}`);
});
