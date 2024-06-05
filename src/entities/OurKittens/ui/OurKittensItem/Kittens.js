import OurKittensItem from "./OurKittensItem";
import styles from './Kittens.module.scss';
import { Text } from "../../../../shared/ui/Text/Text";
import { Stack } from '../../../../shared/ui/Stack/Stack';
import kittensData from "../../lib/data";


const Kittens = () => {  
         
        return (   
            <section className={styles.section}>
            <Stack justifyContent='justifyCenter'>
                <Text type="h2" size="xl" className={styles.title}>
                    НАШИ КОТЯТА
                </Text>
            </Stack>            
        
                <div className={styles.kittens__row}> 
                    {kittensData.map((element, index) =>                  
                            <OurKittensItem
                                key={index}
                                kittensData={element}
                            />                   
                    )}
                </div>          
        </section>
        )         
    }

export default Kittens;