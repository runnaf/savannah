import { useCallback, useState } from "react";
import AccordionItem from "../AccordionItem/AccordionItem";

const Accordion = ({ accordionData }) => {
    const [collapse, setCollapse] = useState(0);

    const accordionHendler = useCallback((index) => {
        setCollapse(prevCollapse => index === prevCollapse ? null : index);
    },[]);
    
    return (
        <ul>
            {accordionData.map((element, index) => {
                return (
                    <AccordionItem
                        onClick={() => accordionHendler(index)}
                        element={element}
                        isOpen={index === collapse}
                        key={index}
                    />
                )
            })}
        </ul>
    );
};

export default Accordion;