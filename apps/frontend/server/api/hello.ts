import { trpc } from '../../services/index.js';

export default defineEventHandler(async () => {
  const value = await trpc.helloWorld.query();
  return {
    message: 'Hello World: ' + value,
  };
});
