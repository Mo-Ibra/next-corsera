import React from 'react';
import { AiOutlineSmile, AiOutlineStar } from 'react-icons/ai';
import { FcAutomotive, FcBiohazard, FcCustomerSupport, FcFlowChart } from 'react-icons/fc';
import { motion } from 'framer-motion';
import Card from './card/card';

function WhyUs2() {

    const fromLeftToRight = {
        initial: {
            x: -100,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 2
            }
        }
    }

    return (
        <section className='py-20 relative'>
            <div className="container mx-auto px-10">
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10">
                    <div>
                        <div className='grid grid-cols-2 gap-10'>
                            <Card number="499" name="Learners & Counting" icon={<FcAutomotive className='mx-auto text-6xl' />} />
                            <Card number="330" name="Courses & Videos" icon={<FcBiohazard className='mx-auto text-6xl' />} />
                        </div>
                        <div className='grid grid-cols-2 gap-10'>
                            <Card number="250" name="Cerfitied Students" icon={<FcCustomerSupport className='mx-auto text-6xl' />} />
                            <Card number="450" name="Winning Award" icon={<FcFlowChart className='mx-auto text-6xl' />} />
                        </div>
                    </div>
                    <div>
                        <motion.div
                            variants={fromLeftToRight}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                        >
                            <span className='text-blue-500 uppercase font-bold'>Why Choose Us!</span>
                            <h3 className='text-gray-700 font-bold text-4xl my-6'>Creating A Community Of Life Long Learners</h3>
                            <p className='text-gray-500'>
                                There are many variations of passages of the Ipsum available,
                                but the majority have suffered alteration in some form, by injected humour.
                            </p>
                        </motion.div>
                        <div className='flex my-6'>
                            <AiOutlineSmile className='text-orange-500 text-6xl mr-5' />
                            <div>
                                <h3 className='text-lg font-semibold text-gray-700'>Trusted By Thousands</h3>
                                <p className='text-gray-500 text-sm'>
                                    There are many variations of passages of the
                                    Ipsum available, but the majority have suffered alteration
                                </p>
                            </div>
                        </div>
                        <div className='flex my-6'>
                            <AiOutlineStar className='text-orange-500 text-6xl mr-5' />
                            <div>
                                <h3 className='text-lg font-semibold text-gray-700'>Unlimited Resources With Strong Support</h3>
                                <p className='text-gray-500 text-sm'>
                                    There are many variations of passages of the
                                    Ipsum available, but the majority have suffered alteration
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <ShapesOne /> */}
        </section>
    )
}

export default WhyUs2