import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import Brand from '@/components/Brand'


const NavBarGuest = ({ ...props }) => {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <nav className="relative flex w-full items-center justify-between bg-white 
            dark:bg-neutral-800 shadow-lg md:flex-wrap px-6 py-4">
            <div className="flex w-full flex-wrap items-center justify-between px-3">
                <Brand href="/dashboard" />
                <div>
                    {user ? (
                        <Link
                            href="/dashboard"
                            className="ml-4 text-sm underline transition duration-150 ease-in-out 
                            text-purple-950 hover:text-purple-900 focus:text-purple-900 
                            active:text-purple-900 dark:text-purple-200 dark:hover:text-purple-200 
                            dark:focus:text-purple-200 dark:active:text-purple-200">
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href="/login"
                                className="text-sm underline transition duration-150 ease-in-out 
                                text-purple-950 hover:text-purple-900 focus:text-purple-900 
                                active:text-purple-900 dark:text-purple-200 dark:hover:text-purple-200 
                                dark:focus:text-purple-200 dark:active:text-purple-200">
                                Login
                            </Link>

                            <Link
                                href="/register"
                                className="ml-4 text-sm underline transition duration-150 ease-in-out 
                                text-purple-950 hover:text-purple-900 focus:text-purple-900 
                                active:text-purple-900 dark:text-purple-200 dark:hover:text-purple-200 
                                dark:focus:text-purple-200 dark:active:text-purple-200">
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default NavBarGuest
