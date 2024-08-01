import { arrowIcon } from '../../../shared/assets/svg/arrowIcon';
import styles from './DeleteModal.module.scss';
import { Button } from "../../../shared/ui/Button/Button";
import { Stack } from "../../../shared/ui/Stack/Stack";
import { Text } from "../../../shared/ui/Text/Text";

export const DeleteModal = (props) => {
    const {
        changeDeleteModal,
        onDelete,
        title,
        text,
        isLoading,
    } = props;

    return (
        <Stack
            gap='32'
            direction='column'
            className={styles.delete_container}
        >
            <Text type="h3" size="l" className={styles.title}>
                {title}
            </Text>
            <Text size="m" className={styles.text}>
                {text}
            </Text>
            <Stack 
                gap='16' 
                className={styles.button_container}>
                <Button className={styles.closeBtn}
                        variant = 'secondary'    
                    onClick={changeDeleteModal}>
                    отмена
                </Button>
                <Button className={styles.deleteBtn}  
                        onClick={onDelete}>
                    удалить 
                    {isLoading
                        ? <span className={styles.loader} />
                        : <>{arrowIcon()}</>
                    }              
                </Button>
            </Stack>
        </Stack>
    );

}