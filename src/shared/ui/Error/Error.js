import { Stack } from '../Stack/Stack';
import styles from './Error.module.scss';

export const Error = ({text}) => {
    return (
        <Stack
            justifyContent='justifyCenter'
            alignItems='alignCenter'
            className={styles.error}
        >
            {text}
        </Stack>
    );
};
