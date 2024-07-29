import { Skeleton } from "../../../../shared/ui/Skeleton/Skeleton";
import kittensData from "../../lib/data";
import CatCard from "../CatCard/CatCard";
import styles from '../CatList/CatList.module.scss';
import { Text } from "../../../../shared/ui/Text/Text";


export const CatList = ({
    cats = kittensData,
    isCatalog = false,
    isLoading,
    skeletons
}) => {
    const getSkeletons = () =>
        new Array(skeletons).fill(0).map((_, index) => (
            <Skeleton key={index} />
        ));

    if (!isLoading && !cats?.length) {
        return (
            <Text size="m" className={styles.text}>
                Мы не нашли котят по вашему запросу. Попробуйте позже или измените критерии поиска.
            </Text>
        );
    };

    return (
        <>
        {cats.map(cat => (
            <CatCard
                key={cat._id}
                cat={cat}
                isCatalog={isCatalog}
            />
        ))}
        {isLoading && getSkeletons()}
        </>

    )

}