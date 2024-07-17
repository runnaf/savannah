import styles from './UploadImage.module.scss';
import { downloadIcon } from '../../assets/svg/downloadIcon';
import { Input } from '../Input/Input';

export const UploadImage = ({
    uploadFileFromDisk,
    imagePreview = '' | null
})=> {


    return (
        <div className={styles.upload_container}>
            {downloadIcon()}
            <Input
                type='file'
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