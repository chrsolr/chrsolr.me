import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  getById: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.user.findUnique({
        where: { id: input.userId },
      });
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany();
  }),
});
