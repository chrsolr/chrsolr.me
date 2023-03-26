import { useUser } from '@clerk/nextjs'
import React, { type ReactNode } from 'react'
import { type UserDTO } from '~/types/UserDTO'
import { api } from '~/utils/api'

type Props = {
  user?: UserDTO
}

export const UserContext = React.createContext<Props>({ user: undefined })
export const UserProvider = function ({ children }: { children: ReactNode }) {
  const user = useUser()
  const { data: currentUserData } = api.users.getById.useQuery({
    userId: 'clfmxnryf00008nk0vsot29nj1',
    id: user.user?.id,
  })
  const dto = { ...currentUserData, ...user } as UserDTO
  return (
    <UserContext.Provider value={{ user: dto }}>
      {children}
    </UserContext.Provider>
  )
}
