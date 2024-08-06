import { useDispatch } from "react-redux";
import { useModal } from "../../shared/hooks/useModal";
import { initCatCard } from "../EditAddForm/model/Slice";
import { CreateCatCard } from "../../widgets/CreateCatCard/CreateCatCard";
import { Button } from "../../shared/ui/Button/Button";
import styles from './EditCat.module.scss';
import { editIcon } from "../../shared/assets/svg/editIcon";

export const EditCat = (props) => {
const {cat} = props;
const [changeCreateModal, drawCreateModal] = useModal();
const dispatch = useDispatch();

const handleClick = () => {
    dispatch(initCatCard(cat));
    changeCreateModal();
}

    return(
        <>
        {drawCreateModal(
            <CreateCatCard
            changeCreateModal={changeCreateModal}
            image = {cat.image}
            id = {cat._id}
            />
        )}
        <Button
            className={styles.btnEdit}
            onClick = {handleClick}
        >
            {editIcon()}
        </Button>
        </>
    )
}