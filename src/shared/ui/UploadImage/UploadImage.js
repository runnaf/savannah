import styles from './UploadImage.module.scss';
import editIcon from '../../assets/photo/editPhotoIcon.png'
import { Input } from '../Input/Input';
import { useId } from 'react';

export const UploadImage = ({
    uploadFileFromDisk,
    imagePreview = '' | null
})=> {
  
    const id = useId();

    return (
        <div className={styles.upload_container}>
          <img className={styles.editIcon}
                src={editIcon} alt="editIcon" />   
            <Input
                type='file' 
                id = {id}            
                className={styles.input}
                accept="image/*, .png, .jpg, .jpeg, .jfif, .pjpeg, .pjp, .tif, .tiff, .bmp, .ico, .cur, .gif, .webp, .pdf, .svg, .webm, .avi, .mpeg, .mp4"
                onChange={uploadFileFromDisk}
            />
            {imagePreview &&
                <img src={imagePreview} alt="preview" className={styles.image} />
            }
        </div>
    );
};