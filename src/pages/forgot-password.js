import  React, { useState, useContext } from 'react'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { LanguageContext } from '@/context/LanguageProvider'
import ApplicationLogo from '@/components/ApplicationLogo'
import AuthCard from '@/components/AuthCard'
import AuthSessionStatus from '@/components/AuthSessionStatus'
import Button from '@/components/Buttons/ButtonPrimary'
import GuestLayout from '@/components/Layouts/GuestLayout'
import Input from '@/components/Input'
import Label from '@/components/Label'

const ForgotPassword = () => {
    const { forgotPassword } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })

    const { language, setLanguage, t } = useContext(LanguageContext)
    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState({})
    const [status, setStatus] = useState()

    const submitForm = event => {
        event.preventDefault()

        forgotPassword({ email, setErrors, setStatus })
    }

    return (
        <GuestLayout>
            <AuthCard
                logo={
                    <Link href="/">
                        <ApplicationLogo className="w-20 h-20" />
                    </Link>
                }>
                <div className="mb-4 text-sm text-gray-600">
                    {t('Forgot your password? No problem.')}
                </div>

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

                    <div className="flex items-center justify-end mt-4">
                        <Button>
                            {t('Email Password Reset Link')}
                        </Button>
                    </div>
                </form>
            </AuthCard>
        </GuestLayout>
    )
}

export default ForgotPassword
