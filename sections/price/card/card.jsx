import React from 'react';

import { FcApproval } from 'react-icons/fc';

import { motion } from 'framer-motion';

function Card({ name, price, badge = null }) {

    const cardVariants = {
        initial: {
            opacity: 0,
            x: -100,
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 2
            }
        }
    }

    return (
        <motion.div
            className='bg-white shadow-lg border border-slate-100 p-5 text-center relative'
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
        >
            <div className="card__header my-10">
                <span className='text-lg font-semibold text-gray-700 uppercase'>{name}</span>
                <h3 className='text-3xl font-bold text-blue-500 my-2 drop-shadow-sm'>${price} <span className='text-sm'>/Yearly</span></h3>
            </div>
            <div className="card__body my-10">
                <ul>
                    <li className='my-4 text-gray-500 flex justify-center items-center'><FcApproval className='mr-2' />Unlimited Access Courses</li>
                    <li className='my-4 text-gray-500 flex justify-center items-center'><FcApproval className='mr-2' />Certificate After Completion</li>
                    <li className='my-4 text-gray-500 flex justify-center items-center'><FcApproval className='mr-2' />High Resolution Videos</li>
                    <li className='my-4 text-gray-500 flex justify-center items-center'><FcApproval className='mr-2' />24/7 Dedicated Support</li>
                    <li className='my-4 text-gray-500 flex justify-center items-center'><FcApproval className='mr-2' />Interactive practice sessions</li>
                </ul>
            </div>
            <button className='border border-blue-500 text-blue-500 hover:bg-blue-500 mb-2 hover:text-white duration-300 py-2 text-lg px-8 rounded-md'>All Features</button>
            {
                badge && (
                    <div className='absolute top-0 right-0 bg-orange-500 text-white px-4 py-1 text-sm rounded-bl-xl'>
                        {badge}
                    </div>
                )
            }
        </motion.div>
    )
}

export default Card