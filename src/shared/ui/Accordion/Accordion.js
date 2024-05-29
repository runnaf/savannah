
import { useState } from "react";
import AccordionItem from "./AccordionItem";

    const Accordion = ({accordionData}) => {

        const [collapse, setCollapse] = useState(false);

        const accordionHendler = (id) => {
            if (id === collapse) setCollapse(false);
            else setCollapse(id);
        }      

        return (
            <ul>
                {accordionData.map((element, id) => {                            
                    return (
                        <AccordionItem 
                            onClick={() => accordionHendler(id)}
                            element={element} 
                            isOpen={id===collapse} 
                            key = {id}                          
                           />                    
                    )
                })}
            </ul>
        );
    }
     
    export default Accordion;