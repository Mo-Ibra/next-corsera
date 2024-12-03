import Image from 'next/image';

import { AiFillStar, AiOutlineUsergroupAdd, AiOutlineBook } from 'react-icons/ai';

import { motion } from 'framer-motion';

function Card({ imageUrl, avatarUrl, author, rate, name, numberOfStudents, numberOfLessons, price }) {

    const fromLeftVariants = {
        initial: {
            x: -200,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 2,
                ease: 'easeInOut'
            }
        }
    }

    const imageVariants = {
        animate: {
            // scale: 0.9,
            borderRadius: 50,
            boxShadow: '4px 6px 16px #ddd',
            transition: {
                duration: 0.3,
                ease: 'easeInOut'
            }
        }
    }

    return (
        <motion.div
            className='bg-white shadow-lg border border-slate-100 p-2'
            variants={fromLeftVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            whileHover={{ y: -20, transition: { duration: 0.3, ease: 'easeInOut' } }}
        >
            <motion.div
                className='cursor-pointer'
                variants={imageVariants}
                whileHover="animate"
            >
                <Image src={imageUrl} alt="Course" width={370} height={270} />
            </motion.div>
            <div className="flex justify-between my-5">
                <div className='flex items-center gap-3'>
                    <Image src={avatarUrl} alt="Avatar" width={32} height={32} className='rounded-full object-fill mr-2' />
                    <h3 className='font-bold text-gray-700'>{author}</h3>
                </div>
                <div className='flex items-center'>
                    <AiFillStar className='inline-block text-yellow-500' />
                    <span className='text-gray-500'>{rate}</span>
                </div>
            </div>
            <div>
                <h2 className='text-gray-700 font-semibold text-lg'>{name}</h2>
            </div>
            <div>
                <div className="inline-flex items-center my-5 mr-5">
                    <AiOutlineUsergroupAdd className='mr-2 text-gray-500' />
                    <p className='text-gray-500'>{numberOfStudents} Students</p>
                </div>
                <div className="inline-flex items-center my-5 mr-5">
                    <AiOutlineBook className='mr-2 text-gray-500' />
                    <p className='text-gray-500'>{numberOfLessons} Lessons</p>
                </div>
            </div>
            <hr className='py-2' />
            <div className='my-2'>
                <button className='bg-blue-500 text-white py-1 px-2 text-sm'>${price}.00 USD</button>
            </div>
        </motion.div>
    )
}

export default Card