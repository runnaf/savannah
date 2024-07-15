import { useCallback, useState } from 'react';

const useFilter = () => {
    const [selected, setSelected] = useState([]);

    const changeSelect = useCallback((option) => {
        setSelected(prevSelected => (
            prevSelected.includes(option)
                ? prevSelected.filter(item => item !== option)
                : [...prevSelected, option]
        ));
    }, []);

    return { selected, changeSelect };
}

export default useFilter;