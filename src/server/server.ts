import express, { Express } from 'express';
import { apiGetUserThreads } from './api/apiGetUserThreads';

import bodyParser from 'body-parser';

const app: Express = express();

app.use(bodyParser.json());

apiGetUserThreads(app);

app.listen(8090, () => {
  console.log('Server is now running on port 8090 ...');
});
