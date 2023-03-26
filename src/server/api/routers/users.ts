import { type User } from '@clerk/nextjs/dist/api'
import { clerkClient } from '@clerk/nextjs/server'
import { z } from 'zod'

import { createTRPCRouter, publicProcedure } from '~/server/api/trpc'

export type GetUserByIdReturnType = Partial<User>

export const usersRouter = createTRPCRouter({
  getById: publicProcedure
    .input(z.object({ userId: z.string().optional() }))
    .query(async ({ input, ctx }): Promise<GetUserByIdReturnType> => {
      if (!input.userId) {
        return { profileImageUrl: undefined }
      }

      const currentClerkUser = await clerkClient.users.getUser(input.userId)
      const bdUser = await ctx.prisma.users.findUnique({
        where: { clerkUserId: input.userId },
        include: {
          blogPosts: true,
          socials: {
            select: {
              url: true,
              fontAwesomeIconName: true,
            },
          },
        },
      })

      return { profileImageUrl: currentClerkUser.profileImageUrl }
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.users.findMany()
  }),
})
