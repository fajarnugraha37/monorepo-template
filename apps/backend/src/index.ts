import { z } from 'zod';

import { helloWorld } from '@packages/shared';
import { router, publicProcedure } from './trpc.js';

export const appRouter = router({
  greeting: publicProcedure
    .input(z.object({ name: z.string() }))
    .query((opts) => {
      const { input } = opts;

      return `Hello ${input.name}` as const;
    }),
  helloWorld: publicProcedure.query(() => {
    helloWorld();
    return Date.now().toString();
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
