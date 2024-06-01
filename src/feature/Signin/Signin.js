import { arrowIcon } from "../../shared/assets/svg/arrowIcon";
import { Button } from "../../shared/ui/Button/Button";
import { Stack } from "../../shared/ui/Stack/Stack";
import { Input } from '../../shared/ui/Input/Input';
import styles from './Signin.module.scss';
import closeButton from '../../shared/assets/photo/close.png';
import { Error } from "../../shared/ui/Error/Error";
import { useState } from "react";


export const Signin = ({ changeSigninModal }) => {
    const [error, setError] = useState(false);

    const handleSignIn = () => {
        const CorrectPassword = false;

        if (CorrectPassword) {
            setError(false);
        } else {
            setError(true);
        }
    }
    return (
        <Stack
            gap='32'
            justifyContent='justifyCenter'
            alignItems='alignCenter'
            direction='column'
            className={styles.signin}
        >
            <img
                className={styles.closeButton}
                src={closeButton} alt="закрыть"
                onClick={changeSigninModal}
            />
            <Input
                placeholder='логин'
                onChange={(value) => console.log(value)}
            />
            <Input
                type="password"
                placeholder='пароль'
                onChange={(value) => console.log(value)}
            />
            {error && <Error text="Введен неправильный логин или пароль"/>}
            <Button className={styles.buttonSignin}
            onClick={handleSignIn}>
                войти {arrowIcon()}
            </Button>
        </Stack>

    )
}