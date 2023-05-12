import React, { useContext } from 'react'
import { useAuth } from '@/hooks/auth'
import { LanguageContext } from '@/context/LanguageProvider'
import Dropdown from '@/components/Dropdown'
import { DropdownButton } from '@/components/DropdownLink'
import Brand from '@/components/Brand'
import LinkA from '@/components/LinkA'


const NavBarGuest = ({ ...props }) => {
    const { user } = useAuth({ middleware: 'guest' })

    const { language, setLanguage, t } = useContext(LanguageContext)
    const handleLanguageChange = (newLanguage) => {
        setLanguage(newLanguage)
    }

    return (
        <nav className="relative flex w-full items-center justify-between bg-white 
            dark:bg-neutral-800 shadow-lg md:flex-wrap px-6 py-4">
            <div className="flex w-full flex-wrap items-center justify-between px-3">
                <Brand href="/dashboard" />
                {/* Settings Language */}
                <div className="hidden sm:flex sm:items-center sm:ml-6">
                    <Dropdown
                        align="right"
                        width="48"
                        trigger={
                            <button className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out">
                                Language
                            </button>
                        }>
                        <DropdownButton onClick={() => handleLanguageChange('es')}>
                            Español
                        </DropdownButton>
                        <DropdownButton onClick={() => handleLanguageChange('en')}>
                            English
                        </DropdownButton>
                    </Dropdown>
                </div>
                <div>
                    {user ? (
                        <LinkA
                            href="/dashboard"
                            className="ml-4 text-sm">
                            {t('Dashboard')}
                        </LinkA>
                    ) : (
                        <>
                            <LinkA
                                href="/login"
                                className="text-sm">
                                {t('Login')}
                            </LinkA>

                            <LinkA
                                href="/register"
                                className="ml-4 text-sm">
                                {t('Register')}
                            </LinkA>
                        </>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default NavBarGuest
