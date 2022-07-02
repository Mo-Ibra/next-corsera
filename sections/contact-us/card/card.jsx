import React from 'react';

import { motion } from 'framer-motion';

function Card({ icon, title, infoOne, infoTwo }) {
    return (
        <motion.div
            className='bg-white shadow-lg border border-slate-100 p-5 text-center'
            whileHover={{ y: -20, transition: { duration: 0.3 } }}
        >
            <div className='my-5'>
                {icon}
            </div>
            <div className='my-5'>
                <h3 className='text-gray-700 font-bold text-2xl my-2'>{title}</h3>
                <p className='text-gray-500 text-sm cursor-pointer'>{infoOne}</p>
                <p className='text-gray-500 text-sm cursor-pointer'>{infoTwo}</p>
            </div>
        </motion.div>
    )
}

export default Card;