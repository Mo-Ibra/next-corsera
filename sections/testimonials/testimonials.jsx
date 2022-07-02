import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Autoplay } from 'swiper';

// Images
import TestimonialImg1 from '../../assets/images/testimonials/1.png';
import TestimonialImg2 from '../../assets/images/testimonials/2.png';
import TestimonialImg3 from '../../assets/images/testimonials/3.png';
import TestimonialImg4 from '../../assets/images/testimonials/4.png';
import TestimonialImg5 from '../../assets/images/testimonials/5.png';
import TestimonialImg6 from '../../assets/images/testimonials/6.png';

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
                            imageUrl={TestimonialImg1}
                            name="Mohamed Ibrahim"
                            role="Web Developer"
                            description="“ There are many variations of passages of Lorem Ipsum available,
                                but the majority on have suffered alteration in some form, by a injected humour,
                                or randomised. ”"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            imageUrl={TestimonialImg2}
                            name="Mohamed Ibrahim"
                            role="Web Developer"
                            description="“ There are many variations of passages of Lorem Ipsum available,
                                but the majority on have suffered alteration in some form, by a injected humour,
                                or randomised. ”"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            imageUrl={TestimonialImg3}
                            name="Mohamed Ibrahim"
                            role="Web Developer"
                            description="“ There are many variations of passages of Lorem Ipsum available,
                                but the majority on have suffered alteration in some form, by a injected humour,
                                or randomised. ”"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            imageUrl={TestimonialImg4}
                            name="Mohamed Ibrahim"
                            role="Web Developer"
                            description="“ There are many variations of passages of Lorem Ipsum available,
                                but the majority on have suffered alteration in some form, by a injected humour,
                                or randomised. ”"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            imageUrl={TestimonialImg5}
                            name="Mohamed Ibrahim"
                            role="Web Developer"
                            description="“ There are many variations of passages of Lorem Ipsum available,
                                but the majority on have suffered alteration in some form, by a injected humour,
                                or randomised. ”"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            imageUrl={TestimonialImg6}
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