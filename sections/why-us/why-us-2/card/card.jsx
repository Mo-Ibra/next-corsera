import React from 'react';

import { motion } from 'framer-motion';

function Card({ number, name, icon }) {

    const fromLeftToRight = {
        initial: {
            x: -100,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                delay: 1
            }
        }
    }

    return (
        <motion.div
            className='bg-white shadow-lg text-center p-5 my-5'
            variants={fromLeftToRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
        >
            {icon}
            <h2 className='text-4xl font-bold text-gray-800 my-2'>{number}</h2>
            <p className='text-gray-500'>{name}</p>
        </motion.div>
    )
}

export default Card