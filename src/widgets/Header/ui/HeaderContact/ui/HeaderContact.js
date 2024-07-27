import styles from "./HeaderContact.module.scss";
import { contacts, mediaData } from "../lib/data";
import { Text } from "../../../../../shared/ui/Text/Text";
import { Stack } from "../../../../../shared/ui/Stack/Stack";

export const HeaderContact = () => {
    return (
        <div className={styles.container}>
            <div className={styles.position}>
                <div className={styles.wrapper}>
                {contacts.map((item) => (
                    <Stack
                        key={item.id}
                        justifyContent='justifyCenter'
                        alignItems="alignCenter"
                        direction='row'
                        gap='8'
                        className={styles[item.className]}
                        >
                            {item.img}
                            <span className="visually-hidden">{item.alt}</span>

                    <Text
                        size='s'
                        type='p'
                    >
                        <span className='visually-hidden'>{item.alt}</span>
                        {item.href ? <a href={item.href} className={styles.link}>{item.text}</a> : item.text}
                    </Text>
                    </Stack>

                ))}
                </div>
                <div className={styles.wrapper}>
                {mediaData.map((item) => (
                    item.href ? <a href={item.href} className={styles.link} key={item.id}>
                    <span className='visually-hidden'>{item.alt}</span>
                    {item.img}
                    </a> : item.text
    ))}
                </div>
            </div>
            

        </div>
)}
