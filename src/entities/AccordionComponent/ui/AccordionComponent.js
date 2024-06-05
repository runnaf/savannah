import Accordion from "../../../shared/ui/Accordion/Accordion";
import { Stack } from "../../../shared/ui/Stack/Stack";
import styles from './AccordionComponent.module.scss';
import { Text } from "../../../shared/ui/Text/Text";
import accordionData from "../lib/data";

const AccordionComponent = () => {

    return (
        <section className={styles.section}>
            <Stack justifyContent='justifyCenter'>
                <Text type="h2" size="xl" className={styles.title}>
                    ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
                </Text>
            </Stack>          
                <Accordion accordionData={accordionData}/>          
        </section>
    );
}

export default AccordionComponent;