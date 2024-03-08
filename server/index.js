import express from "express";
import router from "./router.js";
import cors from "cors";
const server = express();
const port = 4000;
server.use(cors());
server.use(express.json());
server.use(router);
server.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
});
