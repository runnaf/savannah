import styles from './CatList.module.scss';
import CatCard from '../../../../entities/Cat/ui/CatCard/CatCard'
import { Stack } from '../../../../shared/ui/Stack/Stack'


export const CatList = ({cats}) => {
    return (
        <div
            className={styles.container}>
                { cats?.map( cat => <CatCard key={cat._id} kittensData={cat} isCatalog = {true} className={styles.card}/>) }
        </div>
    )
}

