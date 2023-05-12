import React, { useState, useEffect, useContext } from 'react'
import Head from 'next/head'
import { useAuth } from '@/hooks/auth'
import { LanguageContext } from '@/context/LanguageProvider'
import AppLayout from '@/components/Layouts/AppLayout'
import Loader from '@/components/Loader'

const Dashboard = () => {
    const { user } = useAuth({
        middleware: 'auth',
        redirectIfAuthenticated: '/login',
    })

    const { language, setLanguage, t } = useContext(LanguageContext)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [])

    if (!user || isLoading) {
        return (
            <div>
                <Head>
                    <title>SusanaNzth - Dashboard</title>
                </Head>
                <Loader />
            </div>
        )
    }

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    {t('Dashboard')}
                </h2>
            }>

            <Head>
                <title>SusanaNzth - Dashboard</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            {t('welcome')}
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Dashboard
