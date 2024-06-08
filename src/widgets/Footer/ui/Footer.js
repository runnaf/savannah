import styles from "./Footer.module.scss";
import { Stack } from "../../../shared/ui/Stack/Stack";
import { Text } from "../../../shared/ui/Text/Text";
import { leftSectionData, rightSectionData } from "../lib/data";


export const Footer = () => {
    return(

        <footer className={styles.footer}>
            <Stack 
                    className={styles.footerLeftSection}
                    direction='column'
                    gap="8">

                        {leftSectionData.map((item) => (
                            <Stack
                            key = {item.is}
                            justifyContent = 'justifyCenter'
                            alignItems = "alignCenter"
                            direction='row'
                            gap='8'
                            className = {styles[item.className]}
                            >
                                <img className={styles.connectIcon} src= {item.icon} alt={item.alt}/>
                                <Text
                                size='s'
                                type='p'
                                className={styles.text}>
                            <span className={styles.visuallyhidden}>{item.hiddenText}</span>
                            {item.content}
                                </Text>

                            </Stack>
                        ))}
            </Stack>  


            <Stack 
                    className={styles.footerRightSection}
                    direction='column'
                    gap="8">   

                    {rightSectionData.map((item) => (
                        <Stack
                        key = {item.is}
                            justifyContent = 'justifyCenter'
                            alignItems = "alignCenter"
                            direction='row'
                            gap='8'
                            className = {styles[item.className]}>
                                <Text size="s"
                                type="p"
                                className={styles.text}>
                                    <span className={styles.visuallyhidden}>{item.hiddenText}</span>
                                    {item.content}
                                </Text>

                                {item.icon && <img className={styles.connectIcon} src={item.icon} alt= {item.alt}/>}
    
                        </Stack>
                    ))}
                </Stack>     
        </footer>

    )
}