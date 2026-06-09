'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { Eye, EyeOff, Mail, Lock, ArrowLeft, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import Button from '@/components/ui/Button'
import { apiService, LoginData } from '@/lib/api'
import { useAuth } from '@/context/authContext'




export default function LoginForm() {
    const { login } = useAuth()
    const [formData, setFormData] = useState<LoginData>({
        email: '',
        password: ''
    })
    const [showPassword, setShowPassword] = useState(false)
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [apiError, setApiError] = useState<string>('')
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    const searchParams = useSearchParams()
    const [successMessage, setSuccessMessage] = useState(() => searchParams.get('message') || '')

    useEffect(() => {
        if (!successMessage) return
        const timer = setTimeout(() => {
            setSuccessMessage('')
        }, 5000)
        return () => clearTimeout(timer)
    }, [successMessage])

    const validateForm = () => {
        const newErrors: Record<string, string> = {}

        if (!formData.email) {
            newErrors.email = 'Email is required'
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid'
        }

        if (!formData.password) {
            newErrors.password = 'Password is required'
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateForm()) return

        setIsLoading(true)
        setApiError('')

        try {
            const result = await apiService.login(formData)

            if (result.success && result.token) {
                login(result.token)
                router.push('/home')
            }
            else {
                // Show error message from API
                setApiError(result.message || 'Login failed. Please try again.')
            }
        } catch {
            setApiError('An unexpected error occurred. Please try again.')
        } finally {
            setIsLoading(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        // Clear errors when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }))
        }
        if (apiError) {
            setApiError('')
        }
        if (successMessage) {
            setSuccessMessage('')
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Back to Home */}
                <Link
                    href="/"
                    className="inline-flex items-center text-[#0A66C2] hover:text-[#0077B5] mb-8 transition-colors duration-200"
                >
                    <ArrowLeft size={20} className="mr-2" />
                    Back to Home
                </Link>

                {/* Login Card */}
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-[#0A66C2]/10 border border-white/50 p-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#0A66C2] to-[#0077B5] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                            <Lock className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
                        <p className="text-gray-600">Sign in to your LinkedINspire account</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Success Message Display */}
                        {successMessage && (
                            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl flex items-center">
                                <CheckCircle size={16} className="mr-2" />
                                <p className="text-sm">{successMessage}</p>
                            </div>
                        )}

                        {/* API Error Display */}
                        {apiError && (
                            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl">
                                <p className="text-sm">{apiError}</p>
                            </div>
                        )}

                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={cn(
                                        "w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#0A66C2]/20 focus:border-[#0A66C2] transition-all duration-200 bg-white/90 backdrop-blur-sm",
                                        errors.email ? "border-red-500 bg-red-50" : "border-gray-300"
                                    )}
                                    placeholder="Enter your email"
                                    style={{ color: '#6B7280' }}
                                    disabled={isLoading}
                                />
                            </div>
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                            )}
                        </div>

                        {/* Password Field */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className={cn(
                                        "w-full pl-10 pr-12 py-3 border rounded-xl focus:ring-2 focus:ring-[#0A66C2]/20 focus:border-[#0A66C2] transition-all duration-200 bg-white/90 backdrop-blur-sm",
                                        errors.password ? "border-red-500 bg-red-50" : "border-gray-300"
                                    )}
                                    placeholder="Enter your password"
                                    style={{ color: '#6B7280' }}
                                    disabled={isLoading}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                            )}
                        </div>

                        {/* Forgot Password Link */}
                        <div className="text-right">
                            <Link href="/forgot-password" className="text-sm text-[#0A66C2] hover:text-[#0077B5] transition-colors duration-200">
                                Forgot your password?
                            </Link>
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            className="w-full"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Signing in...' : 'Sign In'}
                        </Button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white text-gray-500">Don&apos;t have an account?</span>
                        </div>
                    </div>

                    {/* Sign Up Link */}
                    <div className="text-center">
                        <Link
                            href="/signup"
                            className="text-[#0A66C2] hover:text-[#0077B5] font-medium transition-colors duration-200"
                        >
                            Create a free account
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
