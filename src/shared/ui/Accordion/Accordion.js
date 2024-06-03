import { useCallback, useEffect, useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = ({ accordionData }) => {

    const [collapse, setCollapse] = useState(false);


    const accordionHendler =
    useCallback((index) => {
        if (index === collapse)
             setCollapse(false);
        else setCollapse(index);
    },[collapse])
    
    
    useEffect(() => {
        setCollapse(0);
    },[])
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
}

export default Accordion;