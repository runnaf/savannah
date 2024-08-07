import styles from './CropModal.module.scss';
import { useRef, useState } from 'react';
import { Text } from '../../../shared/ui/Text/Text';
import ReactCrop, { makeAspectCrop, centerCrop, convertToPixelCrop } from 'react-image-crop'
import 'react-image-crop/src/ReactCrop.scss'
import { Button } from '../../../shared/ui/Button/Button';
import setCanvasPreview from "./setCanvasPreview";
import { arrowIcon } from '../../../shared/assets/svg/arrowIcon';

export const CropModal = ({
    setCroppedFile,
    setIsCrop,
    imagePreview
}) => {


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

    const handleClick = () => {
        if (crop && imgRef.current && previewCanvasRef.current){
        setCanvasPreview(
            imgRef.current,
            previewCanvasRef.current,
            convertToPixelCrop(
                crop,
                imgRef.current.width,
                imgRef.current.height
            ));
        const dataUrl = previewCanvasRef.current.toDataURL();                                               
      
        setCroppedFile(dataUrl);
        setIsCrop(false);                                             
       
    }}
    return (
        <div className={styles.crop__row} >   
            <Text type='h3' size='l' className={styles.title}>
                Кадрировать фотографию
            </Text>        
            {imagePreview &&               
                    <ReactCrop
                        crop={crop}
                        onChange={(pixelCrop, percentCrop) => setCrop(percentCrop)}
                        keepSelection
                        aspect={aspectRatio}
                        minWidth={cardWidth}
                        minHeight={cardHeight}
                    >
                        <img src={imagePreview}
                             ref={imgRef} 
                             alt='preview'
                             onLoad={onImageLoad}
                             className={styles.image} />
                    </ReactCrop>
                    }
                    <Button className={styles.cropBtn}
                        onClick={handleClick}>
                        сохранить
                        {arrowIcon()}
                    </Button>             
            
            {crop && 
                <canvas className={styles.canvas} ref={previewCanvasRef} />
            
            }
        </div>
    )
}