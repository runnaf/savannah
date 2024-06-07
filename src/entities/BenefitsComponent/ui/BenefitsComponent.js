import { Text } from "../../../shared/ui/Text/Text";
import styles from './BenefitsComponent.module.scss';
import { Stack } from "../../../shared/ui/Stack/Stack";



const BenefitsComponent = ({benefitsData}) => {
    return (    
        <Stack
                gap='32'
                justifyContent='justifyCenter'
                alignItems='alignCenter'
                className={styles.benefit}
        >
                
                {benefitsData.img}
                <Text type="h3" size="s" className={styles.benefit__text}>
                        {benefitsData.benefit}
                </Text>                                    
        </Stack>
        );
}

export default BenefitsComponent;