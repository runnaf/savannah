
import { Stack } from "../../shared/ui/Stack/Stack";
import styles from "./CreateCatCard.module.scss";
import closeButton from '../../shared/assets/photo/close.png';
import { Text } from "../../shared/ui/Text/Text";
import { EditAddForm } from "../../feature/EditAddForm/ui/EditAddForm/EditAddForm";
import { Button } from "../../shared/ui/Button/Button";
import { arrowIcon } from "../../shared/assets/svg/arrowIcon";
import { getCatCard, initCatCard, resetCatCard} from "../../feature/EditAddForm/model/slises/Slice";
import { useSaveCatMutation, useUploadFileMutation } from '../../pages/CatalogPage/api/api';
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { UploadImage } from "../../shared/ui/UploadImage/UploadImage";


export const CreateCatCard = ({ changeCreateModal }) => { 

    const cat = useSelector(getCatCard);
    const dispatch = useDispatch();
    const [file, setFile] = useState();
    const [imagePreview, setImagePreview] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [statusReq, setStatusReq] = useState({ text: '', isError: false });
    const isLoading = isSaving || isUploading;
    const [saveCat, { isLoading: isSaving }] = useSaveCatMutation();
    const [uploadFile, { isLoading: isUploading }] = useUploadFileMutation();
  


    
    const uploadFileFromDisk = async (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setFile(file);

            const fileUrl = URL.createObjectURL(file);
            setImagePreview(fileUrl);
        } else {
            setImagePreview(null);
        }
    };

    useEffect(() => {
        const isEmpty = Object.values(cat).every(value => value !== '');
        setDisabled(!isEmpty || !file);
    }, [cat, file]);

    const setFormData = useCallback((key, value) => {
        dispatch(initCatCard({ key, value }))
    }, [dispatch]);

    const resetFormData = () => {
        changeCreateModal();
        dispatch(resetCatCard());
    };
   

    const handleSaveCat = async () => {
        try {
            const fileResponse = await uploadFile(file).unwrap();
            const updatedCat = {
                ...cat,
                image: fileResponse.url.split('/')[2]
            };
            await saveCat(updatedCat).unwrap();
            setStatusReq({
                text: "Карточка питомца сохранена успешно",
                isError: false,
            });
        } catch (error) {
            setStatusReq({
                text: "Произошла ошибка, попробуй еще раз",
                isError: true,
            });
        }
    };

    return (
        <Stack
            justifyContent="justifyCenter"
            alignItems="alignCenter"
            direction="column"
            gap='32'
            className={styles.edit}
        >       
            <div>
                <img
                    className={styles.closeButton}
                    src={closeButton} alt="закрыть"                  
                    onClick={resetFormData}
                />
            </div>

            <Text type='h3' size='l' className={styles.title}>
                Создать карточку питомца
            </Text>
            <div className={styles.photoPosition}>
                <UploadImage
                    uploadFileFromDisk={uploadFileFromDisk}
                    imagePreview={imagePreview}
                />
                <EditAddForm setForm={setFormData} />               
            </div>
            <div className={styles.save__btn}>
                <Button 
                className={styles.button}
                disabled={disabled}
                onClick={handleSaveCat}
                >
                     сохранить 
                        {isLoading
                            ? <span className={styles.loader} />
                            : <>{arrowIcon()}</>
                        }
                </Button>
                <Text className={`${styles.text} ${statusReq.isError ? styles.error : styles.default}`}>
                        {statusReq.text}
                </Text>
            </div>
        </Stack>
    );
};
