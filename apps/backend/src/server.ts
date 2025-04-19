import 'module-alias/register.js';
import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { appRouter } from './index.js';

const server = createHTTPServer({
  router: appRouter,
});

const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`Server Listening on port ${port}`);
});
