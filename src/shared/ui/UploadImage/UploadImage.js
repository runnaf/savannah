import styles from './UploadImage.module.scss';
import { useModal } from '../../hooks/useModal';
import { CropModal } from '../CropModal/CropModal';
import editIcon  from '../../assets/photo/editPhotoIcon.png'
import { useRef } from 'react';
import emptyCard from '../../assets/photo/emptyCard.png'




export const UploadImage = ({uploadFileFromDisk, imagePreview})=> {
    const [changeCropModal, drawCropModal] = useModal();
    const catUrl = useRef(emptyCard)
    const updateCatCard = (imagePreview) => {
        catUrl.current = imagePreview;
    }

    return (
        <div className={styles.upload_container}>
            <img src={catUrl.current} className={styles.imgContainer} alt=''/>
        {drawCropModal(
            <CropModal changeCropModal = {changeCropModal}
                        updateCatCard={updateCatCard}  
                        uploadFileFromDisk={uploadFileFromDisk}
                        imagePreview ={imagePreview}                                         
                      />
                   
        )}
              <img className={styles.editIcon}
               onClick={changeCropModal}
            src={editIcon} alt="editIcon" />
        </div>
    );
};