import Accordion from "../../../shared/ui/Accordion/Accordion/Accordion";
import styles from './AccordionComponent.module.scss';
import { Text } from "../../../shared/ui/Text/Text";
import accordionData from "../lib/data";
import { HeaderSection } from "../../../shared/ui/HeaderSection/HeaderSection";

const AccordionComponent = () => {
    return (
        <section className={styles.section}>
            <HeaderSection section="FAQ">
                <Text type="h2" size='xl' className={styles.title}>
                    <span>Есть вопросы?</span> Посмотри здесь:
                </Text>
            </HeaderSection>
            <Accordion accordionData={accordionData} />
        </section>
    );
};

export default AccordionComponent;
