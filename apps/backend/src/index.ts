import 'module-alias/register.js';

import express, { Application } from 'express';
import { helloWorld } from '@packages/shared';

const app: Application = express();

app.use(express.json());

app.get('/', (req, res) => {
  helloWorld();
  res.send('Hello World!');
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server Listening on port ${port}`);
});
