import React, { Fragment , useState} from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import styles from "./Select.module.scss";
import { getStyle } from "../../helper/getStyle";
import CheckedInput from "../Checkbox/Checkbox";
import {Text} from '../Text/Text';



const Select = ({title,options}) =>{

const [menuIsOpen, setMenuIsOpen] = useState(false);

const [checkedOption, setCheckedOption] = useState(
    options.reduce((result,option) => {
        result[option.id] = false;
        return result;
    }, {})
);

    const handleCheckboxChange = (id, checked) => {
        setCheckedOption((prevOption) =>({
            ...prevOption,
            [id]: checked,
        }))
    };

    const handleMenuItemClick = (id) => {
        setCheckedOption((prevOption) => ({
            ...prevOption,
            [id]: !prevOption[id],
        }))
    }



    return (
        <div>
        
<Menu as="div" className={styles.relative}>
    <div >
        <Menu.Button className={styles.selectBox}
        onClick={()=> setMenuIsOpen(!menuIsOpen)}>
        <Text className={styles.titleText}>{title}</Text>
        <ChevronDownIcon className={styles.icon} aria-hidden="true" />
        </Menu.Button>
    </div>
    <Transition
        as={Fragment}
        enter="transition ease-out duration-500"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-200"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        >

        <Menu.Items className={styles.absolute}>
        {options.map((option) => (
        <div  key={option.id}>
            <div className={styles.options}>
        
            <CheckedInput 
            className={styles.checkbox}
            nameField={option.value}
            idInput={option.value}
            checked={checkedOption[option.id]}
            onChange={(checked) => handleCheckboxChange(option.id, checked)}
/>
            <Menu.Item>
                <p
                className={getStyle(
                    '' , {} , ["option"]
                )}
                onClick={() => handleMenuItemClick(option.id)}
        
                >
                {option.value}
                </p>
            </Menu.Item>
            </div>


        </div>
        
        ))}
        

        </Menu.Items>
        </Transition>
    </Menu>
        </div>
    )
}
export default Select;