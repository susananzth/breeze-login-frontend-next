const Label = ({ className, children, ...props }) => (
    <label
        className={`${className} block font-medium text-sm text-gray-700 dark:text-neutral-100`}
        {...props}>
        {children}
    </label>
)

export default Label
