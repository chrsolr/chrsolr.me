import { clerkClient } from '@clerk/nextjs/server'
import { z } from 'zod'

import { createTRPCRouter, publicProcedure } from '~/server/api/trpc'
import { type SocialDTO, type UserDTO } from '~/types/UserDTO'

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
  getUserSocialsByUsername: publicProcedure
    .input(z.object({ username: z.string() }))
    .query(async ({ input, ctx }): Promise<SocialDTO[]> => {
      const dbUser = await ctx.prisma.users.findUnique({
        where: { username: input.username },
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
      return dbUser?.socials ?? []
    }),
  getSiteSocials: publicProcedure.query(
    async ({ ctx }): Promise<SocialDTO[]> => {
      const dbUser = await ctx.prisma.users.findUnique({
        where: { username: 'chrsolr' },
        select: {
          socials: true,
        },
      })
      return dbUser?.socials ?? []
    },
  ),
})
