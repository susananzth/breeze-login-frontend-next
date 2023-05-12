import { useEffect, useState, useContext } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import LinkA from '@/components/LinkA'
import { useAuth } from '@/hooks/auth'
import { LanguageContext } from '@/context/LanguageProvider'
import ApplicationLogo from '@/components/ApplicationLogo'
import AuthCard from '@/components/AuthCard'
import AuthSessionStatus from '@/components/AuthSessionStatus'
import Button from '@/components/Buttons/ButtonPrimary'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Input from '@/components/Input'
import Label from '@/components/Label'

const Login = () => {
    const router = useRouter()

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const { language, setLanguage, t } = useContext(LanguageContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [shouldRemember, setShouldRemember] = useState(false)
    const [errors, setErrors] = useState({})
    const [status, setStatus] = useState()

    useEffect(() => {
        if (router.query.reset?.length > 0 && errors.length === 0) {
            setStatus(atob(router.query.reset))
        } else {
            setStatus(null)
        }
    }, [])

    const submitForm = async event => {
        event.preventDefault()

        login({
            email,
            password,
            remember: shouldRemember,
            setErrors,
            setStatus,
        })
    }

    return (
        <GuestLayout>
            <AuthCard
                logo={
                    <Link href="/">
                        <ApplicationLogo className="w-20 h-20" />
                    </Link>
                }>
                {/* Session Status */}
                <AuthSessionStatus className="mb-4" status={status} message={errors} />

                <form onSubmit={submitForm}>
                    {/* Email Address */}
                    <div>
                        <Label htmlFor="email">{t('Email')}</Label>

                        <Input
                            id="email"
                            type="email"
                            name="email"
                            value={email}
                            className="block mt-1 w-full"
                            onChange={event => setEmail(event.target.value)}
                            required
                            autoFocus
                        />
                    </div>

                    {/* Password */}
                    <div className="mt-4">
                        <Label htmlFor="password">{t('Password')}</Label>

                        <Input
                            id="password"
                            type="password"
                            value={password}
                            className="block mt-1 w-full"
                            onChange={event => setPassword(event.target.value)}
                            required
                            autoComplete="current-password"
                        />
                    </div>

                    {/* Remember Me */}
                    <div className="block mt-4">
                        <label
                            htmlFor="remember_me"
                            className="inline-flex items-center">
                            <input
                                id="remember_me"
                                type="checkbox"
                                name="remember"
                                className="rounded border-neutral-300 text-purple-600 shadow-sm focus:border-purple-300 focus:ring focus:ring-purple-200 focus:ring-opacity-50"
                                onChange={event =>
                                    setShouldRemember(event.target.checked)
                                }
                            />

                            <span className="ml-2 text-sm text-gray-600 dark:text-neutral-100">
                                {t('Remember me')}
                            </span>
                        </label>
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <LinkA
                            href="/forgot-password"
                            className="underline text-sm">
                            {t('Forgot your password?')}
                        </LinkA>

                        <Button className="ml-3">{t('Login')}</Button>
                    </div>
                </form>
            </AuthCard>
        </GuestLayout>
    )
}

export default Login
