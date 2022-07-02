import React from 'react'

import { motion } from 'framer-motion';

function Card({icon, name}) {

    const cardVariants = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 2
            }
        }
    }

    return (
        <motion.div
            className='bg-white shadow-lg p-5 rounded-md'
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover={{ y: -20, backgroundColor: '#eee', transition: { duration: 0.3 } }}
        >
            <div className='my-2'>
                {icon}
            </div>
            <div className='my-2'>
                <h3 className='text-gray-700 font-bold text-lg'>{name}</h3>
                <p className='text-gray-500 my-2'>
                    Fusce tempor, tortor vehicula posuere,
                    mi est iaculis quam, nec luctus enim
                </p>
                <button className='text-gray-700 text-sm'>Learn More!</button>
            </div>
        </motion.div>
    )
}

export default Card