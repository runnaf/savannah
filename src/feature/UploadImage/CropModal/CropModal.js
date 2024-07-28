import styles from './CropModal.module.scss'
import { Input } from '../../../shared/ui/Input/Input';
import { useId, useRef, useState } from 'react';
import { downloadIcon } from '../../../shared/assets/svg/downloadIcon';
import closeButton from '../../../shared/assets/photo/close.png';
import ReactCrop, { makeAspectCrop, centerCrop, convertToPixelCrop } from 'react-image-crop'
import 'react-image-crop/src/ReactCrop.scss'
import { Button } from '../../../shared/ui/Button/Button';
import setCanvasPreview from "./setCanvasPreview";

export const CropModal = ({
    changeCropModal,
    updateCatCard,
    uploadFileFromDisk,
    setCroppedFile,
    imagePreview = '' | null
}) => {
    const id = useId();

    const imgRef = useRef(null);    
    const previewCanvasRef = useRef(null)
    const [crop, setCrop] = useState();

    const cardWidth = 300;
    const cardHeight = 400;
    const aspectRatio = 3 / 4

    const onImageLoad = (e) => {
        const { width, height } = e.currentTarget;
        const cropWidthPecent = (cardWidth / width) * 100;
        const cropHeightPecent = (cardHeight / height) * 100;
        const crop = makeAspectCrop(
            {
                unit: '%',
                width: cropWidthPecent,
                height: cropHeightPecent,
            }, aspectRatio, width, height
        );
        const centeredCrop = centerCrop(crop, width, height)
        setCrop(centeredCrop);
    }

    return (
        <div className={styles.upload_container}>
            <img
                className={styles.closeButton}
                src={closeButton} alt="закрыть"
                onClick={changeCropModal}
            />
            <label htmlFor={id}>
                <Input
                    type='file'
                    id={id}
                    className={styles.input}
                    accept="image/*, .png, .jpg, .jpeg, .jfif, .pjpeg, .pjp, .tif, .tiff, .bmp, .ico, .cur, .gif, .webp, .pdf, .svg, .webm, .avi, .mpeg, .mp4"
                    onChange={uploadFileFromDisk}
                />
                <div className={styles.downloadIcon}>
                    {downloadIcon()}
                </div>
            </label>
            {imagePreview &&
                <div className={styles.image}>
                    <ReactCrop
                        crop={crop}
                        onChange={(pixelCrop, percentCrop) => setCrop(percentCrop)}
                        keepSelection
                        aspect={aspectRatio}
                        minWidth={cardWidth}
                        minHeight={cardHeight}
                    >
                        <img src={imagePreview} ref={imgRef} alt='preview'
                            onLoad={onImageLoad} />
                    </ReactCrop>
                    <Button className={styles.cropBtn}
                        onClick={() => {
                            setCanvasPreview(
                                imgRef.current,
                                previewCanvasRef.current,
                                convertToPixelCrop(
                                    crop,
                                    imgRef.current.width,
                                    imgRef.current.height
                                ));
                            const dataUrl = previewCanvasRef.current.toDataURL()                                               
                            updateCatCard(dataUrl); 
                            setCroppedFile(dataUrl)                                             
                            changeCropModal()
                        }}>
                        Обрезать фото
                    </Button>
                </div>
            }
            {crop && (
                <canvas className={styles.canvas} ref={previewCanvasRef} />
            )
            }
        </div>
    )
}