const AuthCard = ({ logo, children }) => (
    <div className="min-h-screen flex flex-col justify-center items-center px-2 bg-gray-200 dark:bg-neutral-800">
        <div>{logo}</div>

        <div className="w-full sm:max-w-md bg-white dark:bg-neutral-600 shadow-md overflow-hidden rounded-lg mt-6 px-6 py-4">
            {children}
        </div>
    </div>
)

export default AuthCard
