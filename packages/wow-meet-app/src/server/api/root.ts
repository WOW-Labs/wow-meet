import { exampleRouter } from "~/server/api/routers/example";
import { meetingRouter } from "~/server/api/routers/meeting";
import { paticipantsRouter } from "~/server/api/routers/participants";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  meeting: meetingRouter,
  paticipants: paticipantsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
