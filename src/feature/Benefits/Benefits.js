import { Text } from "../../shared/ui/Text/Text";
import styles from './Benefits.module.scss';
import { Stack } from "../../shared/ui/Stack/Stack";
import benefitsData from "../../entities/BenefitsComponent/lib/data";
import BenefitsComponent from "../../entities/BenefitsComponent/ui/BenefitsComponent";

const Benefits = () => {
    return (  
        <section className={styles.section}>
        <Stack justifyContent='justifyCenter'>
            <Text type="h2" size="xl" className={styles.title}>
                ПОЧЕМУ ИМЕННО <strong>МЫ</strong> -
            </Text>
        </Stack>
        <div className={styles.benefits__row}>
            {benefitsData.map(element =>
                <BenefitsComponent                  
                    benefitsData={element}
                    key={element.benefit}/>
            )}           
        </div>                    
    </section>
    );
}
 
export default Benefits;