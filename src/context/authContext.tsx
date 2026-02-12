'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type AuthContextType = {
  loggedIn: boolean
  login: (token: string) => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    setLoggedIn(!!token)
  }, [])

  const login = (token: string) => {
    localStorage.setItem('token', token)
    setLoggedIn(true)
  }

  const logout = () => {
    localStorage.removeItem('token')
    setLoggedIn(false)
  }

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider')
  return ctx
}
