import { clerkClient } from '@clerk/nextjs/server'
import { z } from 'zod'

import { createTRPCRouter, publicProcedure } from '~/server/api/trpc'
import { type UserDTO } from '~/types/UserDTO'

export type GetUserByIdReturnType = Partial<Pick<UserDTO, 'profileImageUrl'>> &
  Partial<Pick<UserDTO, 'socials'>>

export const usersRouter = createTRPCRouter({
  getById: publicProcedure
    .input(z.object({ userId: z.string().optional() }))
    .query(async ({ input, ctx }): Promise<GetUserByIdReturnType> => {
      if (!input.userId) {
        return {}
      }

      const currentClerkUser = await clerkClient.users.getUser(input.userId)
      const dbUser = await ctx.prisma.users.findUnique({
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
      return {
        profileImageUrl: currentClerkUser.profileImageUrl,
        socials: dbUser?.socials,
      }
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.users.findMany()
  }),
})
