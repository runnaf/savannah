
import { Stack } from "../../shared/ui/Stack/Stack";
import styles from "./EnterDetails.module.scss";
import closeButton from '../../shared/assets/photo/close.png';
import { Text } from "../../shared/ui/Text/Text";
import { EditAddForm } from "../../feature/EditAddForm/ui/EditAddForm/EditAddForm";
import { Button } from "../../shared/ui/Button/Button";
import { arrowIcon } from "../../shared/assets/svg/arrowIcon";
import { setCatCard, resetCatCard, getCatCard } from "../../feature/EditAddForm/model/Slice";
import { useSaveCatMutation, useUpdateCatMutation, useUploadFileMutation } from '../../pages/CatalogPage/api/api';
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { UploadImage } from "../../feature/UploadImage/UploadImage/UploadImage";

export const EnterDetails = ({ 
    imagePreview,
    file,
    isCreate,
    id,
    changeCreateModal,
    uploadFileFromDisk, 
    setIsCrop,
}) => {

    const dispatch = useDispatch();
    const cat = useSelector(getCatCard);      
    const [updateCat, {isLoading: isUpdating}] = useUpdateCatMutation();
    const [disabled, setDisabled] = useState(true);
    const [statusReq, setStatusReq] = useState({ text: '', isError: false });
    const [saveCat, { isLoading: isSaving }] = useSaveCatMutation();
    const [uploadFile, { isLoading: isUploading }] = useUploadFileMutation();
    const isLoading = isSaving || isUploading || isUpdating;

    const setFormData = useCallback((key, value) => {
        dispatch(setCatCard({ key, value }))
    }, [dispatch]);

    const resetFormData = () => {   
        changeCreateModal();
        dispatch(resetCatCard());
    };
    

    useEffect(() => {
        const isEmpty = Object.values(cat).every(value => value !=='');    
        setDisabled(!isEmpty || (!file && !imagePreview));
    }, [cat, file, imagePreview]);

    const handleSaveCat = async () => {
        try {
            if (isCreate){

            const fileResponse = await uploadFile(file).unwrap();           
            const updatedCat = {
                ...cat,                
                image: fileResponse.url.split('/')[2]              
            };
            await saveCat(updatedCat).unwrap();
        } else {
            if (file) {
                const fileResponse = await uploadFile(file).unwrap();
                const updatedCat = {
                    ...cat,
                    image: fileResponse.url.split('/')[2]
                };
                await updateCat({id, ...updatedCat}).unwrap();
            } else {
                await updateCat({id, ...cat}).unwrap();
            }               
        }
        
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
                {isCreate ? 'Создать карточку питомца' : 'Обновить карточку питомца'}
            </Text>
            <Stack
                direction='row'
                justifyContent='justifyCenter'
                alignItems='alignStart'
                gap='32'
                className={styles.editSection}>
                <UploadImage
                    uploadFileFromDisk={uploadFileFromDisk}
                    imagePreview={imagePreview}                    
                    setIsCrop={setIsCrop}                                                                                      
                />
                <div className={styles.select__row}>
                <EditAddForm setForm={setFormData} />    
          
                <Button
                    className={`${ disabled ? styles.grey : styles.button}`}
                    disabled={disabled}
                    onClick={handleSaveCat}
                    
                >
                    {isCreate ? 'сохранить' : 'редактировать'}
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
        </Stack>
    );
};
