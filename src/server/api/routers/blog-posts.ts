import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const blogPostRouter = createTRPCRouter({
  getById: publicProcedure
    .input(z.object({ blogPostId: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.blogPosts.findUnique({
        where: { id: input.blogPostId },
      });
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.blogPosts.findMany({
      where: { active: true },
      orderBy: { createdAt: "desc" },
    });
  }),
});
