import React, { useState, useEffect } from 'react'
import { useAuth } from '@/hooks/auth'
import Navigation from '@/components/Layouts/Navigation'
import Loader from '@/components/Loader'

const AppLayout = ({ header, children }) => {
    const { user } = useAuth({ middleware: 'auth' })

    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
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
        <div>
            {isLoading ? (
                <Loader />
            ) : (
            <div className="min-h-screen bg-gray-100">
                <Navigation user={user} />

                {/* Page Heading */}
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>

                {/* Page Content */}
                <main>{children}</main>
            </div>
            )}
        </div>
    )
}

export default AppLayout
