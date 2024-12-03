import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';

import Card from './card/card';

import { useMediaQuery } from 'react-responsive';

function Testimonials2() {
    
    const isTabletOrMobile = useMediaQuery({query: '(max-width: 1024px)'});

    return (
        <section className='py-20 background-image relative'>
            <div className="container mx-auto px-10">
                <div>
                    <div>
                        <span className='uppercase text-blue-500 font-bold text-lg'>TESTIMONIALS</span>
                        <h2 className='text-4xl font-bold text-gray-700 my-2'>Students Feedback</h2>
                        <p className='text-gray-500 w-2/3'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, venenatis dictum et nec.
                        </p>
                    </div>
                    <div className='my-5'>
                        <h5 className='text-gray-700 font-bold text-lg'>People Love To Learn With Us</h5>
                        <div className='flex'>
                            <div className='pr-5 py-5'>
                                <span className='text-orange-500 font-bold text-3xl my-2 block'>90%</span>
                                <p className='text-gray-500'>Students Complete Course Successfully</p>
                            </div>
                            <div className='pr-5 py-5'>
                                <span className='text-orange-500 font-bold text-3xl my-2 block'>9/10</span>
                                <p className='text-gray-500'>Users reported better learning outcomes.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='my-5'>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={isTabletOrMobile ? 1 : 2}
                        autoplay={{
                            delay: 4000
                        }}
                        modules={[Autoplay]}
                    >
                        <SwiperSlide>
                            <Card imageUrl='/assets/images/testimonials/1.png' name="David M.Brad" role="Web Developer" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card imageUrl='/assets/images/testimonials/2.png' name="Mohamed Ibrahim" role="Wordpress Experts" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card imageUrl='/assets/images/testimonials/3.png' name="Osman Dempley" role="UI/UX Designer" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card imageUrl='/assets/images/testimonials/4.png' name="John Doe" role="CEO | Founder" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Testimonials2