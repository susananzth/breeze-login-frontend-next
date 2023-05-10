import Link from 'next/link'

const LinkA = ({ href = '#', children, className, ...props }) => (
    <Link
        href={href}
        {...props}
        className={`${className} text-purple-700 hover:text-purple-500 focus:text-purple-500 
        active:text-indigo-500 dark:text-purple-300 dark:hover:underline dark:focus:underline 
        dark:active:underline transition duration-150 ease-in-out`}>
            {children}
    </Link>
)

export default LinkA
