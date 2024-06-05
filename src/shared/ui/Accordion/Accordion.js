import { useCallback, useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = ({ accordionData }) => {

    const [collapse, setCollapse] = useState(0);


    const accordionHendler =
    useCallback((index) => {
        if (index === collapse)
             setCollapse(null);
        else setCollapse(index);
    },[collapse])
    
  
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