import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Autoplay } from 'swiper';

import Card from './card/card';
import { useMediaQuery } from 'react-responsive';

function Testimonials() {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <section className='py-20 relative'>
            <div className="container px-10 mx-auto">
                <Swiper
                    slidesPerView={isTabletOrMobile ? 1 : 3}
                    spaceBetween={50}
                    autoplay={{
                        delay: 2000
                    }}
                    modules={[Autoplay]}
                >
                    <SwiperSlide>
                        <Card
                            imageUrl='/assets/images/testimonials/1.png'
                            name="Mohamed Ibrahim"
                            role="Web Developer"
                            description="“ There are many variations of passages of Lorem Ipsum available,
                                but the majority on have suffered alteration in some form, by a injected humour,
                                or randomised. ”"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            imageUrl='/assets/images/testimonials/2.png'
                            name="Mohamed Ibrahim"
                            role="Web Developer"
                            description="“ There are many variations of passages of Lorem Ipsum available,
                                but the majority on have suffered alteration in some form, by a injected humour,
                                or randomised. ”"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            imageUrl='/assets/images/testimonials/3.png'
                            name="Mohamed Ibrahim"
                            role="Web Developer"
                            description="“ There are many variations of passages of Lorem Ipsum available,
                                but the majority on have suffered alteration in some form, by a injected humour,
                                or randomised. ”"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            imageUrl='/assets/images/testimonials/4.png'
                            name="Mohamed Ibrahim"
                            role="Web Developer"
                            description="“ There are many variations of passages of Lorem Ipsum available,
                                but the majority on have suffered alteration in some form, by a injected humour,
                                or randomised. ”"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            imageUrl='/assets/images/testimonials/5.png'
                            name="Mohamed Ibrahim"
                            role="Web Developer"
                            description="“ There are many variations of passages of Lorem Ipsum available,
                                but the majority on have suffered alteration in some form, by a injected humour,
                                or randomised. ”"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            imageUrl='/assets/images/testimonials/6.png'
                            name="Mohamed Ibrahim"
                            role="Web Developer"
                            description="“ There are many variations of passages of Lorem Ipsum available,
                                but the majority on have suffered alteration in some form, by a injected humour,
                                or randomised. ”"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonials