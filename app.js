import express from 'express'
import { api } from './api/api.js'
import { dataPoller } from "./data/data-poller.js";

const app = express();
const port = 3000

api.register(app);

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});

dataPoller.register();