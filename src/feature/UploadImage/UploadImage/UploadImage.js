import styles from './UploadImage.module.scss';
import { downloadIcon } from '../../../shared/assets/svg/downloadIcon';
import { Input } from '../../../shared/ui/Input/Input';
import { useId } from 'react';

export const UploadImage = ({ uploadFileFromDisk, imagePreview, setIsCrop }) => {
    const id = useId();
        const handleInput = (e) => {
            uploadFileFromDisk(e);
            setIsCrop(true);
        };
    
        return (
            <div className={styles.upload_container}>               
                <label htmlFor={id}>
                <Input
                    type='file'
                    id = {id}
                    className={styles.input}
                    accept="image/*, .png, .jpg, .jpeg, .jfif, .pjpeg, .pjp, .tif, .tiff, .bmp, .ico, .cur, .gif, .webp, .pdf, .svg, .webm, .avi, .mpeg, .mp4"
                    onChange={handleInput}
                />
                <div className={styles.downloadIcon}>
                    {downloadIcon()}
                </div>
                </label>
                {imagePreview &&
                    <img src={imagePreview} alt="preview" className={styles.image} />
                }
            </div>
    );
};