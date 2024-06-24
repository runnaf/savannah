import { arrowIcon } from "../../shared/assets/svg/arrowIcon";
import { Button } from "../../shared/ui/Button/Button";
import { Stack } from "../../shared/ui/Stack/Stack";
import { Input } from '../../shared/ui/Input/Input';
import closeButton from '../../shared/assets/photo/close.png';
import { useState } from "react";
import styles from './Signin.module.scss';
import { Text } from "../../shared/ui/Text/Text";
import { showPasswordIcon, hidePasswordIcon } from "../../shared/assets/svg/passwordIcons";

export const Signin = ({ changeSigninModal }) => {
    const [error, setError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

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
            gap='16'
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
            <Text
            type='h3' size='l' className={styles.title}
            >Вход</Text>
            <Text
            type='h3' size='s' className={styles.title}
            >Введите данные, чтобы войти в систему</Text>


            <Input
                error={error}
                placeholder='логин'
                className={`${error ? styles.wrong : ''}`}
                onChange={() => {}}
            />
            <Input
                error={error}
                type={!showPassword ? 'password' : 'text'}
                placeholder='пароль'
                className={`${error ? styles.wrong : ''}`}
                onChange={() => {}}
            />
                <div
                className={styles.password}
                onClick={() => setShowPassword(!showPassword)}
            >
                {showPassword ? hidePasswordIcon() : showPasswordIcon()}
            </div>
            <div className={styles.error}>
            {
                error &&
                <Text size='xs' className={styles.text}>
                    Введен неверный логин и/или пароль
                </Text>
            }
            </div>

            <Button
                className={styles.buttonSignin}
                onClick={handleSignIn}
            >
                войти {arrowIcon()}
            </Button>

        </Stack>
    );
};
