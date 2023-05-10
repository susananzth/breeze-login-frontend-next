import Link from 'next/link'
import ApplicationLogo from '@/components/ApplicationLogo'

const Brand = ({ href, className, ...props }) => (
    <Link
        href={href}
        {...props}
        className={`${className} flex items-center space-x-4 my-1 lg:my-0 mr-2`}>
        <div className="shrink-0">
            <ApplicationLogo className="h-12 w-12" />
        </div>
        <span
            className="font-medium transition duration-150 ease-in-out 
            text-purple-950 hover:text-purple-900 focus:text-purple-900 
            active:text-purple-900 dark:text-purple-100 dark:hover:text-purple-300 
            dark:focus:text-purple-300 dark:active:text-purple-300">
            SusanaNzth
        </span>
    </Link>
)

export default Brand
