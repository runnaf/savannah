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
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-orange-100 text-grey-900' : 'text-grey-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                   {option.value}
                </a>
              )}
            </Menu.Item>
          </div>
        ))}


        </Menu.Items>
      </Transition>
    </Menu>
        </div>
    )
}
export default SelectTwo;