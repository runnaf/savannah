import React, { Fragment , useState} from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';
import './SelectTwo.css';
import CheckedInput from "../Checkbox/Checkbox";
// import { checkboxClasses } from "@mui/material";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}



const SelectTwo = ({title,options}) =>{
    const [selectedOption, setSelectedOption] = useState(null);
    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

const [menuIsOpen, setMenuIsOpen] = useState(false);
    return (
        <div>
        
<Menu as="div" className="relative inline-block text-left">
    <div >
        <Menu.Button className="selectBox inline-flex w-full justify-center gap-x-12 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        onClick={()=> setMenuIsOpen(!menuIsOpen)}>
        <p className="titleText">{title}</p>
        {menuIsOpen ? (<ChevronUpIcon className="icon -mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />)
        :(<ChevronDownIcon className="icon -mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
)}
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


        <Menu.Items className="absolute left-0 z-10 mt-2 w-39 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        
        {options.map((option) => (
        <div  key={option.id}>
            <div className="options">
        
            <CheckedInput 
            className='checkbox'
            nameField={option.id}
            idInput={option.id}
            checked={option === selectedOption}
            onChange={() => handleOptionSelect}/>
            <Menu.Item>
            {({ active }) => (
                <a
                href="#"
                className={classNames(
                    active ? 'selectedOption' : 'option',
                    
                )}
                onClick={() => handleOptionSelect(option)}
                >
                {option.value}
                </a>
            )}
            
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
export default SelectTwo;