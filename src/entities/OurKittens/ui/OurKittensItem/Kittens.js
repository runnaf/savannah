import OurKittensItem from "./OurKittensItem";
import styles from './Kittens.module.scss';

const Kittens = ({ kittensData }) => {
    return (
        <div className={styles.kittens__row}>
            {kittensData.map((element, index) => {
                return (
                    <OurKittensItem
                        key={index}
                        element={element}
                    />
                );
            })}
        </div>
    );
};

export default Kittens;