import React from 'react';

import { motion } from 'framer-motion';

function Card({icon, name}) {

    const cardVariants = { 
        initial: {
            y: -100,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 2
            }
        }
    }

    return (
        <motion.div
            className='bg-white cursor-pointer border border-slate-200 p-5 text-center'
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
        >
            {
                icon
            }
            <h3 className='text-gray-700 text-2xl font-semibold my-5'>{name}</h3>
            <p className='text-gray-500 text-sm'>
                Lore Ipsum a simply dummy text of the printing
            </p>
        </motion.div>
    )
}

export default Card