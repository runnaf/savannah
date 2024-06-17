import styles from "./Footer.module.scss";
import { Stack } from "../../../shared/ui/Stack/Stack";
import { Text } from "../../../shared/ui/Text/Text";
import { leftSectionData, rightSectionData } from "../lib/data";
import cIcon from "../../../shared/assets/footer/c.png";


export const Footer = () => {
    return (
        <>

        <footer className={styles.footer}>
            <Stack
                className={styles.footerLeftSection}
                direction='column'
                gap="8">

                {leftSectionData.map((item) => (
                    <Stack
                        key={item.id}
                        justifyContent='justifyCenter'
                        alignItems="alignCenter"
                        direction='row'
                        gap='8'
                        className={styles[item.className]}
                    >
                        <img className={styles.connectIcon} src={item.icon} alt={item.alt} />
                        <Text
                            size='s'
                            type='p'
>
                            <span className='visually-hidden'>{item.hiddenText}</span>
                            {item.content}
                        </Text>
                    </Stack>
                    
                ))}
                 <Stack 
                    alignItems="alignCenter"
                    className={styles.legal}>
                        <img className={styles.cIcon} src={cIcon}/>
                        <Text
                        size='s'
                        type='p'
                         className={styles.text}>
                        2024 <span>Savannah World.</span> Все права защищены
                        </Text>
                        </Stack>
                        
            </Stack>




            <Stack
                className={styles.footerRightSection}
                direction='column'
                gap="8">

                {rightSectionData.map((item) => (
                    <Stack
                        key={item.id}
                        justifyContent='justifyCenter'
                        alignItems="alignCenter"
                        direction='row'
                        gap='8'
                        className={styles[item.className]}
                    >
                        <Text
                            size="s"
                            type="p"
                            className={styles.hiddenTextMobileM}
                        >
                            <span className='visually-hidden'>{item.hiddenText}</span>
                            {item.content}
                        </Text>

<div className={styles.adjMobile}>
                        {item.icon && <img className={styles.connectIcon} src={item.icon} alt={item.alt} />}
                        </div>
                    </Stack>
                ))}
                <Stack
                className={styles.legal}>
                        <Text
                        size='s'
                        type='p'
                        className={styles.text}>
                        Сайт сделан в <span>AL TECH LABS LTD.</span>
                        </Text>
                </Stack>

            </Stack>

            

        </footer>
                <Stack
                className={styles.footerAdjust}
                alignItems="alignCenter"
                direction='column'>

                    <Stack 
                    alignItems="alignCenter"
                    className={styles.legalAdjust}>
                    <img className={styles.cIcon} src={cIcon}/>
                    <Text
                    size='s'
                    type='p'
                    className={styles.text}>
                        2024 <span>Savannah World.</span> Все права защищены
                        </Text>
                        </Stack>
                        

                        <Text
                        size='s'
                        type='p'
                        className={styles.text}>
                        Сайт сделан в <span>AL TECH LABS LTD.</span>
                        </Text>
                        </Stack>
                        </>
    )
}