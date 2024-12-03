import Image from 'next/image';

import { motion } from 'framer-motion';

function Card({ imageUrl, name }) {

    const progressVariants = {
        initial: {
            width: 0,
        },
        animate: {
            width: '100%',
            transition: {
                duration: 2
            }
        },
    }

    return (
        <motion.div className="shadow-lg text-center" whileHover={{ y: -20, transition: { duration: 0.3, ease: 'easeInOut' } }} >
            <Image src={imageUrl} alt="Category" className='cursor-pointer' width={270} height={200} />
            <span className='text-blue-500 font-semibold my-2 block'>23 Course</span>
            <h3 className='text-gray-700 font-bold my-2 text-lg'>{name}</h3>
            <p className='text-sm text-gray-500 my-2'>Lorem Ipsum is simply for this dummy text of the printing</p>
            <motion.div variants={progressVariants} initial="initial" whileInView="animate" viewport={{ once: true }} className='w-full bg-blue-500 mt-5' style={{ height: '2px' }} />
        </motion.div>
    )
}

export default Card