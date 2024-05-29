
import Accordion from "../../../shared/ui/Accordion/Accordion";
import { Stack } from "../../../shared/ui/Stack/Stack";
import styles from './AccordionComponent.module.scss';
import { Text } from "../../../shared/ui/Text/Text";
import accordionData from "../lib/data";


const AccordionComponent = () => {

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

export default AccordionComponent;