import React from 'react';

import Image from 'next/image';

import { AiOutlineBug, AiOutlineBulb, AiOutlineArrowRight } from 'react-icons/ai';

import { motion } from 'framer-motion';

import { useMediaQuery } from 'react-responsive';

function About2() {

    const isScreen = useMediaQuery({ query: '(max-width: 1320px)' });

    const fromLeftToRight = {
        initial: {
            x: -100,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1.5,
                ease: 'easeInOut'
            }
        }
    }

    const fromHiddenToVisible = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 1.5,
                ease: 'easeInOut',
                delay: 0.5
            }
        }
    }

    return (
        <section className='py-20 background-image relative'>
            <div className="container mx-auto px-10">
                <div className={`grid ${isScreen ? 'grid:cols-1' : 'md:grid-cols-1 lg:grid-cols-2 '}gap-8`}>
                    {
                        !isScreen && (
                            <motion.div
                                className='relative'
                                variants={fromLeftToRight}
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                            >
                                <Image src='/assets/images/about2/1.jpg' alt="About" className='absolute top-0 left-8' width={200} height={230} />
                                <Image src='/assets/images/about2/2.jpg' alt="About" className='absolute top-0 right-0' width={315} height={315} />
                                <Image src='/assets/images/about2/3.jpg' alt="About" className='absolute bottom-0 left-0 drop-shadow-lg' width={400} height={220} />
                            </motion.div>
                        )
                    }
                    <div>
                        <motion.span className='uppercase text-blue-500 font-bold block' variants={fromLeftToRight} initial="initial" whileInView="animate" viewport={{ once: true }} >About us</motion.span>
                        <motion.h2 className='text-5xl font-bold text-gray-700 my-5' variants={fromLeftToRight} initial="initial" whileInView="animate" viewport={{ once: true }} >Creating A Community Of Life Long Learners</motion.h2>
                        <p className='text-gray-500 border-l-2 border-blue-500 pl-2'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Donec nunc null liobortis nibh porttitor.
                            Facilisi arcu, nibh vel risus, morbi pharetra.
                            Facilisi sit miam mauris non iaculis elit fusce amet nunc in odio molestie.
                        </p>
                        <div className='flex'>
                            <motion.div className="flex my-5" variants={fromHiddenToVisible} initial="initial" whileInView="animate" viewport={{ once: true }}>
                                <div className="text-white p-5 rounded-md text-4xl">
                                    <AiOutlineBug className='text-orange-500' />
                                </div>
                                <div>
                                    <h3 className='text-gray-700 text-lg font-bold'>Flexible Classes</h3>
                                    <p className='text-gray-500 text-sm'>
                                        There are many variations of passages of the Ipsum available for now
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div className="flex my-5" variants={fromHiddenToVisible} initial="initial" whileInView="animate" viewport={{ once: true }}>
                                <div className="text-white p-5 rounded-md text-4xl">
                                    <AiOutlineBulb className='text-orange-500' />
                                </div>
                                <div>
                                    <h3 className='text-gray-700 text-lg font-bold'>Educator Support</h3>
                                    <p className='text-gray-500 text-sm'>
                                        There are many variations of passages of the Ipsum available for now
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                        <div className='flex'>
                            <motion.div className="flex my-5" variants={fromHiddenToVisible} initial="initial" whileInView="animate" viewport={{ once: true }}>
                                <div className="text-white p-5 rounded-md text-4xl">
                                    <AiOutlineBug className='text-orange-500' />
                                </div>
                                <div>
                                    <h3 className='text-gray-700 text-lg font-bold'>Flexible Classes</h3>
                                    <p className='text-gray-500 text-sm'>
                                        There are many variations of passages of the Ipsum available for now
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div className="flex my-5" variants={fromHiddenToVisible} initial="initial" whileInView="animate" viewport={{ once: true }}>
                                <div className="text-white p-5 rounded-md text-4xl">
                                    <AiOutlineBulb className='text-orange-500' />
                                </div>
                                <div>
                                    <h3 className='text-gray-700 text-lg font-bold'>Educator Support</h3>
                                    <p className='text-gray-500 text-sm'>
                                        There are many variations of passages of the Ipsum available for now
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                        <div>
                            <button className='border border-orange-500 text-orange-500 py-4 px-5 rounded-md text-sm flex items-center hover:bg-orange-500 hover:text-white duration-300'>Know About Us!<AiOutlineArrowRight className='ml-2' /></button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <ShapesOne /> */}
        </section>
    )
}

export default About2