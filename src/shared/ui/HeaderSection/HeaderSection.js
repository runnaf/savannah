import styles from './HeaderSection.module.scss';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';
import { Button } from '../Button/Button';
import { arrowIcon } from '../../assets/svg/arrowIcon';

export const HeaderSection = (props) => {
    const { section, 
            children, 
            handleClick,
            hasButton = false, 
            button } = props;

    return (
        <Stack
            justifyContent='justifyBetween'
            alignItems = 'alignEnd'
            gap = '16'
            className={styles.main}
        >
            <div>
                <Stack gap='16'
                       alignItems = 'alignCenter'>
                    <svg
                        width={40}
                        height="2"
                        viewBox="0 0 58 2"
                        stroke="var(--dark-brown)" 
                        fill="var(--dark-brown)"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <line x1="0.399902" y1="1" x2="57.5191" y2="1" stroke="var(--dark-brown-color)" strokeWidth="2" />
                    </svg>
                    <Text size='l' className={styles.section}>
                        {section} 
                    </Text>
                </Stack>               
                {children}
            </div>
            {hasButton &&
                <Button
                    className={styles.btn}
                    onClick={handleClick}
                >
                    {button} {arrowIcon()}
                </Button>
            }
        </Stack>
    );
};