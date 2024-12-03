import Image from 'next/image';

import { AiOutlineFieldTime, AiOutlineClockCircle, AiOutlineHome } from 'react-icons/ai';

import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

function Card({ imageUrl, name, day, hour, place }) {

    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const cardVariants = {
        initial: {
            y: -50,
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
            className='bg-white shadow-lg flex justify-between items-center border border-slate-100 p-5 my-5 cursor-pointer'
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
        >
            {
                !isTablet && (
                    <div>
                        <Image src={imageUrl} alt="Events" width={140} height={140} />
                    </div>
                )
            }
            <div>
                <h3 className='text-2xl font-bold text-gray-700'>{name}</h3>
                {
                    !isMobile && (
                        <div className='flex'>
                            <div className='flex items-center mr-5 text-gray-500'>
                                <AiOutlineFieldTime className='mr-2' />
                                <p className='text-sm'>{day}</p>
                            </div>
                            <div className='flex items-center mr-5 text-gray-500'>
                                <AiOutlineClockCircle className='mr-2' />
                                <p className='text-sm'>{hour}</p>
                            </div>
                            <div className='flex items-center mr-5 text-gray-500'>
                                <AiOutlineHome className='mr-2' />
                                <p className='text-sm'>{place}</p>
                            </div>
                        </div>
                    )
                }
            </div>
            <div>
                <button className='bg-blue-500 text-white rounded-md py-2 px-4 text-sm'>Book a Seat.</button>
            </div>
        </motion.div>
    )
}

export default Card