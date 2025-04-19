import 'module-alias/register.js';

import express, { Application } from 'express';

const app: Application = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server Listening on port ${port}`);
});
