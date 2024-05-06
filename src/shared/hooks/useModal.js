import { useState } from "react";
import { Modal } from "../ui/Modal/Modal";

export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const changeOpen = async () => {
        setIsOpen(p => !p);
    };

    const drawModal = child => {
        return (
            isOpen &&
            <Modal setIsOpen={setIsOpen}>
                {child}
            </Modal>
        );
    };

    return [changeOpen, drawModal, isOpen];
};
