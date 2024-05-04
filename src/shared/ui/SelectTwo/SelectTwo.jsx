import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import './SelectTwo.css';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const SelectTwo = ({title,options}) =>{
    return (
        <div>
<Menu as="div" className="box relative inline-block text-left">
      <div >
        <Menu.Button className="selectBox inline-flex w-full justify-center gap-x-12 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <p className="titleText">{title}</p>
          <ChevronDownIcon className="icon -mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className=" boxWtihItems absolute left-0 z-10 mt-2 w-39 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        {options.map((option) => (
          <div className="py-1"  key={option.id}>
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
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'selectedOption' : 'option',
                    
                  )}
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
      </Transition>
    </Menu>
        </div>
    )
}
export default SelectTwo;