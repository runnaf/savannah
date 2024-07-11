import { useEffect } from "react";

const useOutsideClick = (ref, isActive, setIsActive) => {
    const handleClick = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setIsActive(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => {
        document.removeEventListener("click", handleClick);
        };
    });

    return { ref, isActive, setIsActive };
};

export default useOutsideClick;