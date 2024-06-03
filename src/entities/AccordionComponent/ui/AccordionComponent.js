import Accordion from "../../../shared/ui/Accordion/Accordion";
import styles from './AccordionComponent.module.scss';
import { Text } from "../../../shared/ui/Text/Text";
import accordionData from "../lib/data";

const AccordionComponent = () => {
    return (
        <section className={styles.section}>
            <Text type="h2" size="xl" className={styles.title}>
                ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
            </Text>
            <Accordion accordionData={accordionData} />
        </section>
    );
};

export default AccordionComponent;
