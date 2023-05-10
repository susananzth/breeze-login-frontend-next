const Input = ({ disabled = false, className, ...props }) => (
    <input
        disabled={disabled}
        className={`${className} rounded-md shadow-sm dark:text-white
        placeholder:text-slate-400 dark:placeholder:text-slate-300
        dark:bg-neutral-500 border-neutral-400 dark:border-neutral-700 focus:border-purple-500 focus:ring 
        focus:ring-purple-400 dark:focus:border-neutral-700 focus:ring-opacity-50`}
        {...props}
    />
)

export default Input
