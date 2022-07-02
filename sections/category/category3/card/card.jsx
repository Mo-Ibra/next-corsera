import React from 'react';
import { motion } from 'framer-motion';

function Card({ icon, name, countOfItems }) {
    return (
        <motion.div
            className='shadow-sm border border-slate-100 p-5 text-center rounded-sm cursor-pointer hover:bg-slate-100'
            whileHover={{ y: -20, transition: { duration: 0.3 } }}
        >
            <div className='pt-4'>
                {icon}
            </div>
            <div className='my-5'>
                <h3 className='font-bold text-gray-700 text-lg'>{name}</h3>
                <p className='text-gray-500'>{countOfItems} Item</p>
            </div>
        </motion.div>
    )
}

export default Card