import { FormControl, Select, MenuItem, InputLabel, ListItemIcon, Checkbox } from '@mui/material';
import React, { useState } from 'react';
import './Select.module.css';




const SelectDrop = ({title, options}) => {

  const [selected, setSelected] = useState([]);

  const handleCheckboxChange = (event, optionValue) => {
    if (event.target.checked) {
      setSelected([...selected, optionValue]);
    } else {
    setSelected(selected.filter((value) => value !== optionValue));
    }
  };



  return (
    <div className='selection'>
      <FormControl sx={{ width: "200px" }}>
      {selected.length === 0 && (
          <InputLabel>{title}</InputLabel>
        )}
        <Select multiple value={selected} onChange={() => {}}>
        {options && options.map((option) => (
            <MenuItem key={option.id} value={option.value}>

              <ListItemIcon>
                <Checkbox
                  checked={selected.includes(option.value)}
                  onChange={(event) => handleCheckboxChange(event, option.value)}
                />
              </ListItemIcon>
              {option.value}
            </MenuItem>
        ))}
        </Select>

      </FormControl>
    </div>
  );
};

export default SelectDrop;
