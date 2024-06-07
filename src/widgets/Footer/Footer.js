import styles from "./Footer.module.scss";
import { Stack } from "../../shared/ui/Stack/Stack";
import { Text } from "../../shared/ui/Text/Text";
import phoneIcon from "../../shared/assets/footer/phone.png";
import envelopeIcon from "../../shared/assets/footer/mail.png";
import placemarkerIcon from "../../shared/assets/footer/placemarker.png";
import cIcon from "../../shared/assets/footer/c.png";
import telegramIcon from "../../shared/assets/footer/telegram.png";
import instaIcon from "../../shared/assets/footer/insta.png";
import vkIcon from "../../shared/assets/footer/vk.png";


export const Footer = () => {
    return(
        <section className={styles.section}>
        <footer className={styles.footer}>
            <Stack 
                    className={styles.footerLeftSection}
                    direction='column'
                    gap="8">

                        <Stack
                        justifyContent="justifyCenter"
                        alignItems="alignCenter"
                        direction='row'
                        gap="8">
                                <img className={styles.connectIcon} src={phoneIcon} alt="социальные сети"/>
                                <Text size="s" type="p" className={styles.text}>
                                <span className='visually-hidden'>Номер телефона</span>     
                                    +999 888-77-66
                                    </Text> 
                        </Stack>

                        <Stack
                        justifyContent="justifyCenter"
                        alignItems="alignCenter"
                        direction='row'
                        gap="8">
                                    <img className={styles.connectIcon} src={envelopeIcon} alt="социальные сети"/>
                                <Text size="s" type="p" className={styles.text}>
                                <span className='visually-hidden'>Эмейл</span>     
                                    <a className={styles.email} target='_blank' rel="noreferrer" href="savannahworld@gmail.com">savannahworld@gmail.com</a>
                                    </Text> 
                                    </Stack>

                                    <Stack
                        justifyContent="justifyCenter"
                        alignItems="alignCenter"
                        direction='row'
                        gap="8">
                                    <img className={styles.connectIcon} src={placemarkerIcon} alt="социальные сети"/>
                                <Text size="s" type="p" className={styles.text}>
                                <span className='visually-hidden'>Адрес</span>  
                                г.Москва, ул.Отрадная, дом 1
                                    </Text> 
                                    </Stack>

                                    <Stack
                        justifyContent="justifyCenter"
                        alignItems="alignCenter"
                        direction='row'
                        className={styles.legal}
                        >
                        <img className={styles.cIcon} src={cIcon} alt="corporation"/>
                        <p>2024 <b>Savannah World.</b> Все права защищены</p>
                        </Stack>
            </Stack>  


            <Stack 
                    className={styles.footerRightSection}
                    direction='column'
                    gap="8">   

                <Stack
                        justifyContent="justifyCenter"
                        alignItems="alignCenter"
                        direction='row'
                        gap="8">
                                <Text size="s" type="p" className={styles.text}>
                                <span className='visually-hidden'>телеграм</span>     
                                    <a className={styles.email} target='_blank' rel="noreferrer" href="savannahworld@gmail.com">@savannahworld</a>
                                    </Text> 
                                    <img className={styles.connectIcon} src={telegramIcon} alt="социальные сети"/>
                                    </Stack>
                <Stack
                        justifyContent="justifyCenter"
                        alignItems="alignCenter"
                        direction='row'
                        gap="8">
                                <Text size="s" type="p" className={styles.text}>
                                <span className='visually-hidden'>инстаграм</span>     
                                    <a className={styles.email} target='_blank' rel="noreferrer" href="savannahworld@gmail.com">@savannahworld</a>
                                    </Text> 
                                    <img className={styles.connectIcon} src={instaIcon} alt="социальные сети"/>
                                    </Stack>

                <Stack
                        justifyContent="justifyCenter"
                        alignItems="alignCenter"
                        direction='row'
                        gap="8">
                                <Text size="s" type="p" className={styles.text}>
                                <span className='visually-hidden'>вконтакте</span>     
                                    <a className={styles.email} target='_blank' rel="noreferrer" href="savannahworld@gmail.com">@savannahworld</a>
                                    </Text> 
                                    <img className={styles.connectIcon} src={vkIcon} alt="социальные сети"/>
                                    </Stack>

                <Stack
                        className={styles.legal}
                        >
                        <p>Сайт сделан в <span>AL TECH LABS LTD.</span></p>
                        </Stack>
                </Stack>     
        </footer>
        </section>
    )
}