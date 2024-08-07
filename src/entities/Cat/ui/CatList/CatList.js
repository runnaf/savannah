import styles from './CatList.module.scss';
import CatCard from '../../../../entities/Cat/ui/CatCard/CatCard';

export const CatList = ({ cats }) => {
    return (
        <div className={styles.container}>
            {cats?.map(cat =>
                <CatCard
                    key={cat._id}
                    cat={cat}
                    isCatalog
                    className={styles.card} />
            )}
        </div>
    )
}

