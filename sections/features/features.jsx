import Image from 'next/image';

import FeaturesImg from '../../assets/images/sections/4.jpg';

import { AiOutlineApartment, AiOutlineBell, AiOutlineBulb, AiOutlineCodeSandbox } from 'react-icons/ai';

import { motion } from 'framer-motion';

function Features() {

    const fromLeftToRightVariants = {
        initial: {
            opacity: 0,
            x: -100
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 2
            }
        }
    };


    const fromHiddenToDisplay = {
        initial: {
            opacity: 0,
            y: -20,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 1,
            }
        }
    }

    return (
        <section className='py-20 relative'>
            <div className="container mx-auto px-10">
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10">
                    <div>
                        <motion.div className='my-5' variants={fromLeftToRightVariants} initial="initial" whileInView="animate" viewport={{ once: true }} >
                            <span className='text-blue-500 font-bold'>Why Choose Us?</span>
                            <h2 className='text-gray-700 text-4xl font-bold'>Our Core Features</h2>
                        </motion.div>
                        <div>
                            <div className="flex my-10">
                                <motion.div variants={fromHiddenToDisplay} initial="initial" whileInView="animate" viewport={{ once: true }}>
                                    <AiOutlineApartment className='text-orange-500 text-5xl' />
                                    <h3 className='text-gray-700 font-semibold text-2xl my-2'>Flexible Classes</h3>
                                    <p className='text-gray-500 w-3/4'>Fusce tempor, tortor vehicula posuere, mi est iaculis quam, nec luctus enim</p>
                                </motion.div>
                                <motion.div variants={fromHiddenToDisplay} initial="initial" whileInView="animate" viewport={{ once: true }}>
                                    <AiOutlineBell className='text-orange-500 text-5xl' />
                                    <h3 className='text-gray-700 font-semibold text-2xl my-2'>Offline Mode</h3>
                                    <p className='text-gray-500 w-3/4'>Fusce tempor, tortor vehicula posuere, mi est iaculis quam, nec luctus enim</p>
                                </motion.div>
                            </div>
                            <div className="flex my-10">
                                <motion.div variants={fromHiddenToDisplay} initial="initial" whileInView="animate" viewport={{ once: true }}>
                                    <AiOutlineBulb className='text-orange-500 text-5xl' />
                                    <h3 className='text-gray-700 font-semibold text-2xl my-2'>Flexible Learning</h3>
                                    <p className='text-gray-500 w-3/4'>Fusce tempor, tortor vehicula posuere, mi est iaculis quam, nec luctus enim</p>
                                </motion.div>
                                <motion.div variants={fromHiddenToDisplay} initial="initial" whileInView="animate" viewport={{ once: true }}>
                                    <AiOutlineCodeSandbox className='text-orange-500 text-5xl' />
                                    <h3 className='text-gray-700 font-semibold text-2xl my-2'>Educator Support</h3>
                                    <p className='text-gray-500 w-3/4'>Fusce tempor, tortor vehicula posuere, mi est iaculis quam, nec luctus enim</p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <motion.div className='rounded-lg' variants={fromLeftToRightVariants} initial="initial" whileInView="animate" viewport={{ once: true }}>
                            <Image src={FeaturesImg} alt="Features" />
                        </motion.div>
                    </div>
                </div>
            </div>
            {/* <ShapesOne /> */}
        </section>
    )
}

export default Features