import React, { useState, useContext } from 'react'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { LanguageContext } from '@/context/LanguageProvider'
import ApplicationLogo from '@/components/ApplicationLogo'
import AuthCard from '@/components/AuthCard'
import Button from '@/components/Buttons/ButtonPrimary'
import GuestLayout from '@/components/Layouts/GuestLayout'

const VerifyEmail = () => {
    const { logout, resendEmailVerification } = useAuth({
        middleware: 'auth',
        redirectIfAuthenticated: '/dashboard',
    })

    const { language, setLanguage, t } = useContext(LanguageContext)
    const [status, setStatus] = useState(null)

    return (
        <GuestLayout>
            <AuthCard
                logo={
                    <Link href="/">
                        <ApplicationLogo className="w-20 h-20" />
                    </Link>
                }>

                <div className="mb-4 text-sm text-gray-600">
                    {t('Thanks for signing up!')}
                </div>

                {status === 'verification-link-sent' && (
                    <div className="mb-4 font-medium text-sm text-green-600">
                        {t('A new verification link')}
                    </div>
                )}

                <div className="mt-4 flex items-center justify-between">
                    <Button
                        onClick={() => resendEmailVerification({ setStatus })}>
                        {t('Resend Verification Email')}
                    </Button>

                    <button
                        type="button"
                        className="underline text-sm text-gray-600 hover:text-gray-900"
                        onClick={logout}>
                        {t('Logout')}
                    </button>
                </div>
            </AuthCard>
        </GuestLayout>
    )
}

export default VerifyEmail
