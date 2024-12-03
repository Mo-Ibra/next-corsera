import React from 'react';

import Image from 'next/image';

import { AiOutlineBug, AiOutlineBulb, AiOutlineArrowRight } from 'react-icons/ai';

import { motion } from 'framer-motion';

function About1() {

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
                ease: 'easeInOut'
            }
        }
    }

    return (
        <section className='py-20 background-image relative'>
            <div className="container mx-auto px-10">
                <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-8'>
                    <div>
                        <motion.div variants={fromLeftToRight} initial="initial" whileInView="animate" viewport={{once: true}}>
                            <Image src="/assets/images/about/1.jpg" alt="About" width={470} height={520} />
                        </motion.div>
                    </div>
                    <div>
                        <motion.span className='uppercase text-blue-500 font-bold block' variants={fromLeftToRight} initial="initial" whileInView="animate" viewport={{once: true}} >About us</motion.span>
                        <motion.h2 className='text-5xl font-bold text-gray-700 my-5' variants={fromLeftToRight} initial="initial" whileInView="animate" viewport={{once: true}} >Creating A Community Of Life Long Learners</motion.h2>
                        <p className='text-gray-500 border-l-2 border-blue-500 pl-2'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc null liobortis nibh porttitor. Facilisi arcu, nibh vel risus, morbi pharetra.
                        </p>
                        <motion.div className="flex my-10" variants={fromHiddenToVisible} initial="initial" whileInView="animate" viewport={{once: true}}>
                            <div className="mr-5 bg-orange-500 text-white p-5 rounded-md text-4xl">
                                <AiOutlineBug/>
                            </div>
                            <div>
                                <h3 className='text-gray-700 font-semibold text-2xl'>Flexible Classes</h3>
                                <p className='text-gray-500'>
                                    It is a long established fact that a reader will be distracted by
                                    this on readable content of when looking at its layout.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div className="flex my-10" variants={fromHiddenToVisible} initial="initial" whileInView="animate" viewport={{once: true}}>
                            <div className="mr-5 bg-orange-500 text-white p-5 rounded-md text-4xl">
                                <AiOutlineBulb/>
                            </div>
                            <div>
                                <h3 className='text-gray-700 font-semibold text-2xl'>Learn From anywhere</h3>
                                <p className='text-gray-500'>
                                    It is a long established fact that a reader will be distracted by
                                    this on readable content of when looking at its layout.
                                </p>
                            </div>
                        </motion.div>
                        <div>
                            <button className='border border-orange-500 text-orange-500 py-4 px-5 rounded-md text-sm flex items-center hover:bg-orange-500 hover:text-white duration-300'>Know About Us!<AiOutlineArrowRight className='ml-2' /></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About1;