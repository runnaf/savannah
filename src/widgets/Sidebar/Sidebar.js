import styles from './Sidebar.module.scss';
// import { useModal } from '../../shared/hooks/useModal';
import { Stack } from '../../shared/ui/Stack/Stack';
import Select from '../../shared/ui/Select/Select';
import closeButton from '../../shared/assets/photo/close.png';


export const Sidebar = () => {
    // const [changeSidebarModal, drawSidebarModal] = useModal();
    return(
        <Stack>
                <img
                className={styles.closeButton}
                src={closeButton} alt="закрыть"
                // onClick={changeSidebarModal}
            />
         <Select/>
        </Stack>
    )
}