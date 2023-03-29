import { z } from 'zod'
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc'

export const blogPostsRouter = createTRPCRouter({
  getById: publicProcedure
    .input(z.object({ blogPostId: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.blogPosts.findUnique({
        where: { id: input.blogPostId },
      })
    }),
  getBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.blogPosts.findFirst({
        where: { slug: input.slug, active: true },
        select: {
          coverImageUrl: true,
          title: true,
          markdown: true,
        },
      })
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.blogPosts.findMany({
      where: { active: true },
      orderBy: { createdAt: 'desc' },
    })
  }),
})
