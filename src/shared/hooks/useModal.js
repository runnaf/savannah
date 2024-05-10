import { useState, Fragment } from "react";
import { Modal } from "../ui/Modal/Modal";
import { Transition } from "@headlessui/react";

export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const changeOpen = async () => {
        setIsOpen(p => !p);
    };

    const drawModal = child => {
        return (
            isOpen &&
            <Transition
            as={Fragment}
            show={isOpen}
            enter="transition ease-out duration-500"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-200"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
            >
            <Modal setIsOpen={setIsOpen} >
                {child}
            </Modal>
            </Transition>
        );
    };

    return [changeOpen, drawModal, isOpen];
};
