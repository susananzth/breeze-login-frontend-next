import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import Brand from '@/components/Brand'
import LinkA from '@/components/LinkA'


const NavBarGuest = ({ ...props }) => {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <nav className="relative flex w-full items-center justify-between bg-white 
            dark:bg-neutral-800 shadow-lg md:flex-wrap px-6 py-4">
            <div className="flex w-full flex-wrap items-center justify-between px-3">
                <Brand href="/dashboard" />
                <div>
                    {user ? (
                        <LinkA
                            href="/dashboard"
                            className="ml-4 text-sm">
                            Dashboard
                        </LinkA>
                    ) : (
                        <>
                            <LinkA
                                href="/login"
                                className="text-sm">
                                Login
                            </LinkA>

                            <LinkA
                                href="/register"
                                className="ml-4 text-sm">
                                Register
                            </LinkA>
                        </>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default NavBarGuest
