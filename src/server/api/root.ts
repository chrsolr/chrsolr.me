import { createTRPCRouter } from "~/server/api/trpc";
import { blogPostRouter } from "~/server/api/routers/blog-posts";
import { userRouter } from "./routers/users";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  blogPost: blogPostRouter,
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
