import docImg from '../photo/document.png';
import docImg_2x from '../photo/doc@2x.png';
import vetImg from '../photo/vet.png';
import vetImg_2x from '../photo/vet@2x.png';
import careImg from '../photo/care.png';
import careImg_2x from '../photo/care@2x.png';

export const docIcon = () => {
    return (
        <img src={docImg}
            srcSet={`${docImg_2x} 2x`} alt="документы" 
        />
    )
}

export const vetIcon = () => {
    return (
        <img src={vetImg}
            srcSet={`${vetImg_2x} 2x`} alt="ветеринария" 
        />
    )
}

export const careIcon = () => {
    return (
        <img src={careImg}
            srcSet={`${careImg_2x} 2x`} alt="консультация" 
        />
    )
}