import { useCallback, useState } from "react";
import { apiUrl } from "../../shared/api/api";
import { EnterDetails } from "../../entities/EnterDetails/EnterDetails";
import { CropModal } from "../../feature/UploadImage/CropModal/CropModal";


export const CreateCatCard = ({ changeCreateModal, image, id, isCreate }) => {
    const [file, setFile] = useState(null);   
    const [imagePreview, setImagePreview] = useState(image ? `${apiUrl}/uploads/${image}` : null);
    const [isCrop, setIsCrop] = useState(false); 
    const [fileName, setFileName] = useState("");

    const uploadFileFromDisk = useCallback (async (e) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setFile(file);
            setFileName(file.name);
            const fileUrl = URL.createObjectURL(file);              
            setImagePreview(fileUrl);            
        } else {
            setImagePreview(null);
        }          
    }, [setFile, setFileName, setImagePreview]);

    const setCroppedFile = useCallback(async (dataUrl) => {
        try {
            const response = await fetch(dataUrl);
            const blob = await response.blob();
            const file = new File([blob], `${fileName}`, { type: "image/png" });
            setFile(file);
            setImagePreview(dataUrl);
        } catch (error) {
            console.error("Ошибка при преобразовании dataUrl в файл:", error);
        }
    }, [setFile, setImagePreview, fileName]); 

    return (
        <>
        { !isCrop ?
        <EnterDetails
            changeCreateModal={changeCreateModal}
            imagePreview={imagePreview}
            uploadFileFromDisk={uploadFileFromDisk}
            file={file}
            setIsCrop={setIsCrop}
            isCreate={isCreate}
            id={id}/>
        :
         <CropModal         
            imagePreview={imagePreview}    
            setCroppedFile={setCroppedFile}   
            setIsCrop={setIsCrop}                                                                       
     />    
        }              
        
        </>
    );
};
