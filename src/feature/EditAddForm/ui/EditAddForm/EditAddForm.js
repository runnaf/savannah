import { Input } from "../../../../shared/ui/Input/Input";
import { dataFilter} from "../../../FilterCats/lib/data";
import { Stack } from "../../../../shared/ui/Stack/Stack";
import styles from "./EditAddForm.module.scss";
import { SelectItem } from "../SelectItem/SelectItem";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getCatCard } from "../../model/Slice";


export const EditAddForm = ({setForm}) => {

const cat = useSelector(getCatCard)

  const [empty, setEmpty] = useState(false); 

  const blurHandler = (e) => {
   e.preventDefault()
    if (e.target.value) {
       setEmpty(false);
    } else {
      setEmpty(true);
  }
}

const handleChange = (e) => {
      const { name, value } = e.target;
      setForm(name, value);
    
}

  return (      
          <Stack
            direction="column"                          
            gap="32"
            className={styles.edit__row}
            >
              <Input             
                placeholder="имя" 
                required
                name='name_cat'
                className={`${empty ? styles.wrong : ''}`} 
                onBlur =  {e => blurHandler(e)}   
                onChange={handleChange}
                defaultValue={cat['name_cat']}
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
                        setForm={setForm}
                    />
                ))}
              </Stack>            
          </Stack> 
  );

};
