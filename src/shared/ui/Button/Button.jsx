

export const Button = (props) => {
    const {
        text,
        disabled,
        background = 'brown',
        size = 'l',
        className,
        onClick,
        ...otherProps
    } = props
    const buttonDisabled = disabled
    const buttonClasses = [style.btn, background, size, className]
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={buttonDisabled}
            {...otherProps}
        >
            {text}
        </button>
    )
};
