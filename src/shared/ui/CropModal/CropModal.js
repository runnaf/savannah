import styles from './CropModal.module.scss'
import { Input } from '../Input/Input';
import { useId, useRef, useState } from 'react';
import { downloadIcon } from '../../assets/svg/downloadIcon';
import closeButton from '../../../shared/assets/photo/close.png';
import ReactCrop, { makeAspectCrop, centerCrop, convertToPixelCrop } from 'react-image-crop'
import 'react-image-crop/src/ReactCrop.scss'
import { Button } from '../Button/Button';
import setCanvasPreview from "../CropModal/setCanvasPreview";

export const CropModal = ({ 
    changeCropModal,
    updateCatCard, 
    uploadFileFromDisk,
    imagePreview = '' | null
    }) => {
       const id = useId();

        const imgRef = useRef(null);
        const previewCanvasRef = useRef(null) 
 
        const cardWidth = 330;
        const cardHeight = 374;

        const [crop, setCrop] = useState();
      

        const onImageLoad = (e) => {
            const {width, height} = e.currentTarget;
            const cropWidthPecent = (cardWidth/width) *100;
            const cropHeightPecent = (cardHeight/height) *100;
            const crop = makeAspectCrop(
                {
                    unit: '%',                
                    width: cropWidthPecent,
                    height: cropHeightPecent,
                }, width, height
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
            id = {id}            
            className={styles.input}
            accept="image/*, .png, .jpg, .jpeg, .jfif, .pjpeg, .pjp, .tif, .tiff, .bmp, .ico, .cur, .gif, .webp, .pdf, .svg, .webm, .avi, .mpeg, .mp4"
            onChange={uploadFileFromDisk}
        />
         <div  className={styles.downloadIcon}>
                {downloadIcon()} 
           </div>
        </label>
        {imagePreview &&
            <div  className={styles.image}>
                <ReactCrop
                    crop={crop}
                    onChange={(pixelCrop, percentCrop) => setCrop(percentCrop)}
                    keepSelection                   
                    minWidth={cardWidth}
                    minHeight={cardHeight}
                >
                    <img src={imagePreview}  ref= {imgRef} alt='preview'
                    onLoad={onImageLoad}/>
                </ReactCrop>
                <Button className={styles.cropBtn}
                        onClick = {() => {setCanvasPreview(
                            imgRef.current,
                            previewCanvasRef.current,
                            convertToPixelCrop(
                                crop, 
                                imgRef.current.width,
                                imgRef.current.height
                                ));
                                const dataUrl = previewCanvasRef.current.toDataURL()
                                updateCatCard(dataUrl);
                                changeCropModal()
                                }}>
                    Обрезать фото
                </Button>
            </div>
            }
          {crop && (
            <canvas className={styles.canvas} ref={previewCanvasRef}/>
          )
          }
    </div>
    )
}