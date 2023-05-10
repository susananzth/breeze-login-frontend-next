const ButtonPrimary = ({ type = 'submit', children, className, ...props }) => (
    <button
        type={type}
        {...props}
        className={`${className} rounded-lg text-white font-semibold text-xs tracking-widest
        bg-purple-700 ring-purple-950 hover:bg-purple-900 active:bg-purple-950 
        focus:outline-none focus:border-purple-400 focus:ring focus:ring-purple-300
        disabled:opacity-55 transition ease-in-out duration-150 px-4 py-2`}>
            {children}
    </button>
)

export default ButtonPrimary
