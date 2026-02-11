'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { User, Mail, Calendar, Settings, LogOut, ArrowLeft } from 'lucide-react'
import { cn } from '@/lib/utils'
import Button from '@/components/ui/Button'
import { apiService } from '@/lib/api'

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const checkAuth = () => {
      if (!apiService.isAuthenticated()) {
        router.push('/login')
        return
      }
      
      const currentUser = apiService.getCurrentUser()
      setUser(currentUser)
      setIsLoading(false)
    }

    checkAuth()
  }, [router])

  const handleLogout = async () => {
    try {
      await apiService.logout()
      router.push('/')
    } catch (error) {
      console.error('Logout error:', error)
      // Even if logout fails, clear local storage and redirect
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      localStorage.removeItem('isLoggedIn')
      router.push('/')
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-[#0A66C2] border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null // Will redirect to login
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/"
              className="flex items-center space-x-2 group"
            >
              <ArrowLeft size={20} className="text-gray-600 hover:text-[#0A66C2] transition-colors" />
              <span className="text-gray-600 hover:text-[#0A66C2] transition-colors">Back to Home</span>
            </Link>
            
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="flex items-center space-x-2"
            >
              <LogOut size={16} />
              <span>Logout</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 p-8 mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-[#0A66C2] to-[#0077B5] rounded-2xl flex items-center justify-center">
              <User className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user.name}!</h1>
              <p className="text-gray-600 flex items-center mt-1">
                <Mail size={16} className="mr-2" />
                {user.email}
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-blue-900">Account Status</h3>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <p className="text-blue-700 text-sm">Active</p>
            </div>
            
            <div className="bg-green-50 rounded-xl p-6 border border-green-100">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-green-900">Member Since</h3>
                <Calendar size={16} className="text-green-600" />
              </div>
              <p className="text-green-700 text-sm">
                {new Date(user.createdAt).toLocaleDateString()}
              </p>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-purple-900">Role</h3>
                <Settings size={16} className="text-purple-600" />
              </div>
              <p className="text-purple-700 text-sm capitalize">{user.role}</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 p-6 hover:shadow-2xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
              <User className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Profile Settings</h3>
            <p className="text-gray-600 text-sm mb-4">Update your personal information and preferences</p>
            <Button variant="outline" size="sm" className="w-full">
              Manage Profile
            </Button>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 p-6 hover:shadow-2xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Sessions</h3>
            <p className="text-gray-600 text-sm mb-4">View and manage your upcoming sessions</p>
            <Button variant="outline" size="sm" className="w-full">
              View Sessions
            </Button>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 p-6 hover:shadow-2xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
              <Settings className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Account Settings</h3>
            <p className="text-gray-600 text-sm mb-4">Manage your account security and preferences</p>
            <Button variant="outline" size="sm" className="w-full">
              Account Settings
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
