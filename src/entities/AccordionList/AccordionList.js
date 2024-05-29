
import Accordion from "../../shared/ui/Accordion/Accordion";
import { Stack } from "../../shared/ui/Stack/Stack";
import styles from './AccordionList.module.scss';
import { Text } from "../../shared/ui/Text/Text";



const accordionData = [
    {
        question: 'Lorem ipsum dolor sit amet',
        answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?'
    },
    {
        question: 'Lorem ipsum dolor sit',       
        answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna?'
    },
    {
        question: 'Lorem ipsum dolor',
        answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore?'
    },
    {
        question: 'Lorem ipsum',
        answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et?'
    }
]

const AccordionList = () => {

    return (
        <div>
            <section className={styles.section}>                    
                <Stack>
                    <Text type="h2" size="xl" className={styles.title}>                     
                        ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
                    </Text>
                </Stack>
                <div className={styles.container}>
                <Accordion  accordionData={accordionData}/>   
                </div>
            </section>     
        </div>
    );
}

export default AccordionList;