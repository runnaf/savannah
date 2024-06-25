import styles from "./Footer.module.scss";
import { Stack } from "../../../shared/ui/Stack/Stack";
import { Text } from "../../../shared/ui/Text/Text";
import { sectionData, mediaData } from "../lib/data";
import cIcon from "../../../shared/assets/footer/c.png";


export const Footer = () => {
    return (


        <footer className={styles.footer}>
            <Stack
                className={styles.footerSection}
                direction='column'
                gap="8"
            >

                {sectionData.map((item) => (
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
                    className={styles.legal}
                >
                    <img className={styles.cIcon} src={cIcon} alt="Savannah World" />
                    <Text
                        size='s'
                        type='p'
                        className={styles.text}>
                        2024 <span>Savannah World.</span> Все права защищены
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
                        className={styles.textCompany}
                    >
                        Сайт сделан в <span>AL TECH LABS LTD.</span>
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
                    <img className={styles.cIcon} src={cIcon} alt="Savannah World" />
                    <Text
                        size='s'
                        type='p'
                        className={styles.text}
                    >
                        2024 <span>Savannah World.</span> Все права защищены
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
                        Сайт сделан в <span>AL TECH LABS LTD.</span>
                    </Text>
                </Stack>
            </Stack>
        </footer>
    )
}