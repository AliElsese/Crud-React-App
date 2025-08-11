export default function Button({ children, className, width = 'w-full', ...rest }) {
    return (
        <button className={`${className} ${width} rounded-md text-white p-2`} {...rest}>
            {children}
        </button>
    )
}