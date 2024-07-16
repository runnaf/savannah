import { Input } from "../../../../shared/ui/Input/Input";
import { dataFilter} from "../../../FilterCats/lib/data";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import styles from "./EditAddForm.module.scss";
import { SelectItem } from "../SelectItem/SelectItem";
import { useId, useState } from "react";
import editIcon from "../../../../shared/assets/photo/editPhotoIcon.png";

export const EditAddForm = () => {

  const [empty, setEmpty] = useState(false);
  const id = useId();

  const blurHandler = (e) => {
   e.preventDefault()
    if (e.target.value) {
       setEmpty(false);
    } else {
      setEmpty(true);
  }
}

  return (  

      <Stack
          justifyContent="justifyCenter"
          alignItems="alignStart"
          direction="row"
          gap="32"
          className={styles.editSection}
      >
      <div className={styles.photoPosition}>
          <div className={styles.addDiv}></div>  
          <label className={styles.catLabel}  htmlFor={id}>
                    <Input
                        type ='file'
                        id = {id}                                  
                        className={styles.catInput} 
                    />     
                    <img className={styles.editIcon}
                        src={editIcon} alt="editIcon" />            
                </label> 
                </div>
          <Stack
            direction="column"                          
            gap="32"
            className={styles.edit__row}
            >
            <Input             
              placeholder="имя" 
              className={`${empty ? styles.wrong : ''}`} 
              onBlur =  {e => blurHandler(e)}   
              onChange={() => { }}
            />
      
            <Stack 
              gap="16" 
              className={styles.select}
              justifyContent="justifyBetween"
            >
           

              {Object.entries(dataFilter).map(([filter, options]) => (
                  <SelectItem 
                      key={filter} 
                      filter={filter} 
                      options={options} 
              
                  />
              ))}
            </Stack>
          </Stack>
          
    </Stack>
 
  );

};
