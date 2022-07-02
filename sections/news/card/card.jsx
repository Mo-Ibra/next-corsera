import Image from 'next/image';

import { AiOutlineClockCircle, AiOutlineUser } from 'react-icons/ai';

import { motion } from 'framer-motion';

function Card({ category, title, date, author, imageUrl }) {

    const cardVariants = {
        initial: {
            y: -50,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1
            }
        }
    }

    return (
        <motion.div
            className='bg-white shadow-lg p-5'
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
        >
            <span className='uppercase text-blue-500 font-semibold text-lg'>{category}</span>
            <h2 className='text-2xl font-bold text-gray-700 my-5 cursor-pointer'>{title}</h2>
            <div className='flex my-5'>
                <div className="flex items-center mr-5">
                    <AiOutlineClockCircle className='text-gray-500 mr-2' />
                    <p className='text-gray-500'>{date}</p>
                </div>
                <div className="flex items-center mr-5">
                    <AiOutlineUser className='text-gray-500 mr-2' />
                    <p className='text-gray-500'>Posted By {author}</p>
                </div>
            </div>
            <motion.div

                className='rounded-md cursor-pointer'
                whileHover={{ borderRadius: '50px', boxShadow: '4px 6px 16px #ddd', transition: { duration: 0.3 } }}
            >
                <Image src={imageUrl} alt="New" />
            </motion.div>
        </motion.div>
    )
}

export default Card