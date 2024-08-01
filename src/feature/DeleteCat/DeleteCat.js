
import { DeleteModal } from "../../entities/DeleteModal/ui/DeleteModal";
import { useDeleteCatMutation } from "../../pages/CatalogPage/api/api";
import { deleteIcon } from "../../shared/assets/svg/deleteIcon";
import { useModal } from "../../shared/hooks/useModal";
import { Button } from "../../shared/ui/Button/Button";
import { Stack } from "../../shared/ui/Stack/Stack";
import styles from './DeleteCat.module.scss';

export const DeleteCat = (props) => {

    const { id } = props;

    const [deleteCat, { isLoading, error }] = useDeleteCatMutation();
    const [changeDeleteModal, drawDeleteModal] = useModal();


    const deleteCatCard = async () => {
        try {            
            await deleteCat(id).unwrap();
        } catch (err) {
            console.error("Failed to delete cat:", error);
        }
    };


    
    return(
        
        <Stack    
            gap='32'
            justifyContent='justifyCenter'
            alignItems='alignCenter'
            direction='column'
            className={styles.delete}>

            {drawDeleteModal (
                <DeleteModal
                    changeDeleteModal = {changeDeleteModal}
                    onDelete = {deleteCatCard}
                    title="Удалить карточку котенка?"
                    text="Это действие нельзя будет отменить. Карточка будет удалена навсегда."
                    isLoading={isLoading}
                />
                )}         
          
                <Button
                        className={styles.delete}
                        onClick={changeDeleteModal}                       
                    >
                        {deleteIcon()}                      
                    </Button>
            
        </Stack>
    )
}