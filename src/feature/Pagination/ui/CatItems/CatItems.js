import CatCard from '../../../../entities/CatCard/ui/CatCard/CatCard'
import { Stack } from '../../../../shared/ui/Stack/Stack'
import styles from './CatItems.module.scss'

export const CatItems = ({cats}) => {
    return (
        <Stack
            justifyContent="justifyBetween"
            alignItems="alignCenter"
            className={styles.container}>
                { cats?.map( cat => <CatCard key={cat._id} kittensData={cat} isCatalog = {true} className={styles.card}/>) }
        </Stack>
    )
}