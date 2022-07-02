import React from 'react';

import { motion } from 'framer-motion';

import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai';

function Card({ imageUrl, name, role }) {

    const cardVariants = {
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

    const widgetVariants = {
        initial: {
            y: -100,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 1.5,
                duration: 0.5
            }
        }
    }

    return (
        <motion.div
            className='relative'
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            whileHover={{ y: -20, transition: { duration: 0.3 } }}
        >
            <img src={imageUrl} alt="Team" width="100%" height="100%" className='rounded-md' />
            <motion.div className='absolute bottom-4 right-4 bg-white shadow-lg border border-slate-100 p-4 rounded-2xl' variants={widgetVariants} initial="initial" whileInView="animate" viewport={{ once: true }}>
                <h3 className='text-gray-700 font-bold text-2xl'>{name}</h3>
                <p className='text-gray-500 text-sm'>{role}</p>
                <div>
                    <AiFillFacebook className='inline-block text-blue-500 mr-2 cursor-pointer' />
                    <AiFillTwitterCircle className='inline-block text-blue-500 mr-2 cursor-pointer' />
                    <AiFillInstagram className='inline-block text-blue-500 mr-2 cursor-pointer' />
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Card