import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FcBiotech, FcBrokenLink, FcCallTransfer, FcCollect, FcComments, FcDribbble, FcFactoryBreakdown } from 'react-icons/fc';
import Card from './card/card';
import { Autoplay } from 'swiper';
import { useMediaQuery } from 'react-responsive';

function Category3() {

    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 550px)' });

    return (
        <section className='py-20 relative'>
            <div className="container px-10 mx-auto">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={isTablet ? isMobile ? 1 : 2 : 5}
                    autoplay={{
                        delay: 2000
                    }}
                    modules={[Autoplay]}
                >
                    <SwiperSlide>
                        <Card backgroundColor="blue" icon={<FcBiotech className='mx-auto text-5xl' />} name="Data Science" countOfItems="45" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card backgroundColor="red" icon={<FcBrokenLink className='mx-auto text-5xl' />} name="Web Development" countOfItems="30" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card backgroundColor="yellow" icon={<FcCallTransfer className='mx-auto text-5xl' />} name="Art & Design" countOfItems="30" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card backgroundColor="blue" icon={<FcCollect className='mx-auto text-5xl' />} name="Content Writing" countOfItems="30" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card backgroundColor="red" icon={<FcComments className='mx-auto text-5xl' />} name="Data Science" countOfItems="30" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card backgroundColor="yellow" icon={<FcDribbble className='mx-auto text-5xl' />} name="Health & Fitness" countOfItems="30" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card backgroundColor="green" icon={<FcFactoryBreakdown className='mx-auto text-5xl' />} name="Blogging" countOfItems="30" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default Category3