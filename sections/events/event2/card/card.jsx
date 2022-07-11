import Image from 'next/image';

import { AiOutlineShareAlt } from 'react-icons/ai';

import { motion } from 'framer-motion';

function Card({ imageUrl, name }) {

    const cardVariants = {
        initial: {
            y: -200,
            opacity: 0,

        },
        animate: {
            y: 0,
            opacity: 1,
            transition: { duration: 2 }
        }
    }

    return (
        <motion.div
            className='bg-slate-50 shadow-lg border border-slate-100'
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
        >
            <div>
                <Image src={imageUrl} alt="Event" className='cursor-pointer' />
            </div>
            <div className='p-5'>
                <div className='flex items-center'>
                    <AiOutlineShareAlt className='mr-2' />
                    <p className='text-sm text-gray-500'>Alpaca Way Anaheim, CA 92805</p>
                </div>
                <div>
                    <h3 className='text-gray-700 font-bold text-2xl my-5 cursor-pointer'>{name}</h3>
                    <span className='text-blue-500 font-semibold cursor-pointer'>Get Ticket</span>
                </div>
            </div>
        </motion.div>
    )
}

export default Card