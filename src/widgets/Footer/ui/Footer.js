import styles from "./Footer.module.scss";
import { Stack } from "../../../shared/ui/Stack/Stack";
import { Text } from "../../../shared/ui/Text/Text";
import { contacts, mediaData } from "../lib/data";


export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Stack
                className={styles.footerSection}
                direction='column'
                gap="8"
            >

                {contacts.map((item) => (
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
                            <span className='visually-hidden'>{item.alt}</span>
                            {item.href ? <a href={item.href} className={styles.link}>{item.text}</a> : item.text}
                        </Text>
                    </Stack>

                ))}
                <Stack
                    alignItems="alignCenter"
                    className={styles.legal}
                >
                    <Text
                        size='s'
                        type='p'
                        className={styles.text}>
                        © 2024 Savannah World. Все права защищены
                    </Text>
                </Stack>
            </Stack>

            <Stack
                className={styles.footerMediaOnly}
                direction='column'
                gap="8"
            >

                {mediaData.map((item) => (
                    <Stack
                        key={item.id}
                        justifyContent='justifyCenter'
                        alignItems="alignCenter"
                        direction='row'
                        gap="8"
                        className={styles[item.className]}
                    >
                        <Text
                            size="s"
                            type="p"
                            className={styles.hiddenTextMobileM}
                        >
                            <span className='visually-hidden'>{item.alt}</span>
                            {item.href ? <a href={item.href} className={styles.link}>{item.text}</a> : item.text}
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
                        className={styles.textCompany}
                    >
                        Создание сайта - AL TECH LABS LTD.
                    </Text>
                </Stack>
            </Stack>

            <Stack
                className={styles.footerAdjust}
                alignItems="alignCenter"
                justifyContent="justifyCenter"
                direction='row'
            >

                <Stack>
                    <Text
                        size='s'
                        type='p'
                        className={styles.text}
                    >
                        © 2024 Savannah World. Все права защищены
                    </Text>
                </Stack>

                <Stack
                    alignItems="alignCenter"
                    justifyContent="justifyCenter"
                >
                    <Text
                        size='s'
                        type='p'
                        className={styles.text}
                    >
                        Создание сайта - AL TECH LABS LTD.
                    </Text>
                </Stack>
            </Stack>
        </footer>
    )
}