import { Stack } from '../../../../shared/ui/Stack/Stack';
import { getFilterText } from '../../lib/data';
import { memo, useCallback } from 'react';
import { setFilter } from '../../model/slices/slice';
import { useDispatch, useSelector } from 'react-redux';
import Checkbox from '../../../../shared/ui/Checkbox/Checkbox';
import { Text } from '../../../../shared/ui/Text/Text';

export const FilterDrawerItem = memo(({ filter, options}) => {
    const dispatch = useDispatch();
    const selected = useSelector(state => state.filter[filter]);

    const handleSelect = useCallback((option) => {
        dispatch(setFilter({ filter, option }))
    }, [dispatch, filter])
    
    return (
        <Stack
            direction='column'
            align='start'
            gap="8"
            // className={styles.filter}
        >
            <Text tag="h3" size='m'>
                {getFilterText(filter)}:
            </Text>

            {options.map(option =>
                <Stack key={option} gap="16">
                    <Checkbox
                        nameField={option}
                        idInput={option}
                        checked={selected.includes(option)}
                        onChange={() => handleSelect(option)}
                    />
                    <Text>{option}</Text>
                </Stack>
            )}
        </Stack>
    );
});