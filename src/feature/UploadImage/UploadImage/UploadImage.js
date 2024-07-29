import styles from './UploadImage.module.scss';
import { useModal } from '../../../shared/hooks/useModal';
import { CropModal } from '../CropModal/CropModal';
import editIcon from '../../../shared/assets/photo/editPhotoIcon.png'
import { useRef } from 'react';
import emptyCard from '../../../shared/assets/photo/emptyCard.png'

export const UploadImage = ({ uploadFileFromDisk, imagePreview, setCroppedFile }) => {
    
    const [changeCropModal, drawCropModal] = useModal();

    
     const catUrl = useRef(emptyCard)  
    const updateCatCard = (imagePreview) => {  
        catUrl.current = imagePreview;         
        }    

    return (
        <div className={styles.upload_container}>
            <img src={catUrl.current} className={styles.imgContainer} alt='' />
            {drawCropModal(
                <CropModal changeCropModal={changeCropModal}
                    updateCatCard={updateCatCard}
                    uploadFileFromDisk={uploadFileFromDisk}
                    imagePreview={imagePreview}
                    setCroppedFile={setCroppedFile}
                />

            )}
            <img className={styles.editIcon}
                onClick={changeCropModal}
                src={editIcon} alt="editIcon" />
        </div>
    );
};