import React, { Fragment , useState} from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import './SelectTwo.css';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  

const SelectTwo = ({title,options}) =>{
    const [selectedOption, setSelectedOption] = useState(null);
    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };
    return (
        <div>
<Menu as="div" className="relative inline-block text-left">
      <div >
        <Menu.Button className="selectBox inline-flex w-full justify-center gap-x-12 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <p className="titleText">{title}</p>
          <ChevronDownIcon className="icon -mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>


        <Menu.Items className="absolute left-0 z-10 mt-2 w-39 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        
        {options.map((option) => (
          <div className="py-1"  key={option.id}>
             {selectedOption === option ? (
<svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
    <g filter="url(#filter0_d_228_2)">
      <rect x="4" width="25" height="25" rx="5" fill="#884825"/>
      <rect x="4.5" y="0.5" width="24" height="24" rx="4.5" stroke="#4A4747"/>
    </g>
    <path d="M24 6L17 17.5L10 10" stroke="white" stroke-width="2"/>
    <defs>
      <filter id="filter0_d_228_2" x="0" y="0" width="33" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_228_2"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_228_2" result="shape"/>
      </filter>
    </defs>
  </svg>) : (
    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="33" viewBox="0 0 34 33" fill="none">
  
    <g filter="url(#filter0_d_228_3)">
      <rect x="4.12988" width="25" height="25" rx="5" fill="#F7F1EB"/>
      <rect x="4.62988" y="0.5" width="24" height="24" rx="4.5" stroke="#4A4747"/>
    </g>
    <defs>
      <filter id="filter0_d_228_3" x="0.129883" y="0" width="33" height="33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_228_3"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_228_3" result="shape"/>
      </filter>
    </defs>
  </svg>
  )}
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
           
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="262" height="2" viewBox="0 0 262 2" fill="none">
<path d="M-0.00512695 0.75L262.002 0.75" stroke="#7A5452"/>
</svg>
</div>

          </div>
          
        ))}
        


        </Menu.Items>

    </Menu>
        </div>
    )
}
export default SelectTwo;