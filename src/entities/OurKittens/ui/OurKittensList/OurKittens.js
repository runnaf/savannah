
import { Stack } from '../../../../shared/ui/Stack/Stack';
import { Text } from "../../../../shared/ui/Text/Text";
import kittensData from '../../lib/data';
import Kittens from '../OurKittensItem/Kittens';
import styles from './OruKittens.module.scss';


const OurKittens = () => {   
  
    return (
        <section className={styles.section}>
            <Stack>
                <Text type="h2" size="xl" className={styles.title}>
                    НАШИ КОТЯТА
                </Text>
            </Stack>
           
            <div className={styles.container}>                         
                    <Kittens kittensData = {kittensData}/>                
            </div>
        </section>
    );
}

export default OurKittens;