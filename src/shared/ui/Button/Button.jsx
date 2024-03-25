import './Button.scss';

export const Button = ({ text, onClick }) => {
    return (
        <button
            type="button"
            className="btn"
            onClick={onClick}
        >
            {text}
        </button>
    )
};
