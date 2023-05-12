const AuthSessionStatus = ({ status, className, message, ...props }) => (
    <>
        {status == 'success' && (
          <div
            className={`${className} rounded-lg bg-green-200 font-medium text-sm text-green-800 mb-4 px-6 py-5`}
            role="alert" {...props}>
                {message}
        </div>
        )}
        {status == 'danger' && (
            <div
                className={`${className} rounded-lg bg-red-200 font-medium text-sm text-red-700 mb-4 px-6 py-5`}
                role="alert" {...props}>
                    {message}
            </div>
        )}
    </>
)

export default AuthSessionStatus
