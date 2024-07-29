import styles from './OurKittens.module.scss';
import { Text } from "../../../../shared/ui/Text/Text";

import { HeaderSection } from '../../../../shared/ui/HeaderSection/HeaderSection';
import { useGetCatsQuery } from '../../../../pages/CatalogPage/api/api';
import { CatList } from '../../../CatCard/ui/CatList/CatList';
import kittensData from '../../../CatCard/lib/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/pagination';
import CatCard from '../../../CatCard/ui/CatCard/CatCard';

const OurKittens = () => {

    const {
        data: { cats } = {},
        error,
        isLoading
    } = useGetCatsQuery({shipment: ['готов к отправке']});
    if (error) return null;

    return (
        <section className={styles.section}>
            <HeaderSection section="Наши котята" hasButton >
                <Text tag="h2" size='xl' className={styles.title}>
                    Выберите себе <span>питомца</span> в нашем каталоге
                </Text>
            </HeaderSection>
            <div className={styles.container_desktop}>
                <CatList
                cats={cats?.slice(0,3)}
                isLoading={isLoading}
                skeletons={3}
                />
            </div>
            <div className={styles.container_mobile}>
            <Swiper
                    modules={[Pagination]}
                    loop={true}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 120,
                        },
                    }}
                >
                    {cats?.slice(0, 3).map((cat = kittensData) =>
                        <SwiperSlide key={cat._id}>
                            <CatCard
                                cat={cat}                            
                            />
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </section>
    )
}
export default OurKittens;
