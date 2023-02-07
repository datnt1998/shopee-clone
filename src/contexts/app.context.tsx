import { createContext, useState } from 'react'
import { User } from 'src/types/user.types'
import { getAccessTokenFromLS, getProfileFromLS } from 'src/utils/auth'

interface AppContextInterface {
  isAuthenticated: boolean
  profile: User | null
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  setProfile: React.Dispatch<React.SetStateAction<User | null>>
}

export const getInitialAppContext: () => AppContextInterface = () => ({
  isAuthenticated: Boolean(getAccessTokenFromLS()),
  profile: getProfileFromLS(),
  setIsAuthenticated: () => null,
  setProfile: () => null
})

const initialAppContext = getInitialAppContext()

export const AppContext = createContext<AppContextInterface>(initialAppContext)

export const AppProvider = ({
  children,
  defaultValue = initialAppContext
}: {
  children: React.ReactNode
  defaultValue?: AppContextInterface
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    defaultValue.isAuthenticated
  )

  const [profile, setProfile] = useState<User | null>(defaultValue.profile)

  return (
    <AppContext.Provider
      value={{ isAuthenticated, profile, setIsAuthenticated, setProfile }}
    >
      {children}
    </AppContext.Provider>
  )
}
