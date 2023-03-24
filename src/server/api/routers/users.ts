import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const usersRouter = createTRPCRouter({
  getById: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.users.findUnique({
        where: { id: input.userId },
        include: {
          blogPosts: true,
          socials: {
            select: {
              url: true,
              fontAwesomeIconName: true,
            },
          },
        },
      });
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.users.findMany();
  }),
});
