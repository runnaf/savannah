import { useModal } from "../../shared/hooks/useModal";
import { HeaderSection } from "../../shared/ui/HeaderSection/HeaderSection";
import { CreateCatCard } from "../../widgets/CreateCatCard/CreateCatCard";
import styles from './AddNewCatCard.module.scss';
import { Text } from "../../shared/ui/Text/Text";
import { useAuth } from "../../shared/hooks/useAuth";

export const AddNewCatCard = () => {
    const [changeCreateModal, drawCreateModal] = useModal();
    const { isAuth } = useAuth();
    return ( 
        <>
        {drawCreateModal(
            <CreateCatCard 
                isCreate
                changeCreateModal={changeCreateModal} />
        )}

            <HeaderSection
                section="Продаются котята"
                hasButton={isAuth}             
                handleClick={changeCreateModal}
                button='создать питомца'
            >
                <Text type="h2" size='xl' className={styles.title}>
                    Котята <span>готовые стать</span> частью семьи
                </Text>
            </HeaderSection>
      
        </>
     );
}
 
