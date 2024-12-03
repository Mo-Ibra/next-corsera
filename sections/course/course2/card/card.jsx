import React from 'react';

import { AiFillStar } from 'react-icons/ai';
import { FcReading, FcOvertime, FcBusinessman } from 'react-icons/fc';

import Image from 'next/image';

function Card({
    authorUrl,
    authorName,
    authorRole,
    courseLessons,
    courseHours,
    courseStudents,
    courseTitle,
    courseImage,
    coursePrice,
    rate,
    badge = null }) {

    const Icons = ({ count }) => (
        Array.from({ length: count }).map((_item, index) =>
            <AiFillStar key={index} className='inline-block text-yellow-500' />
        )
    )

    return (
        <div className='bg-white shadow-sm border border-slate-100 relative'>
            <div className='p-5'>
                <div className='flex'>
                    <div className='mr-5'>
                        <Image src={authorUrl} alt="Author" className='rounded-full' width={55} height={55} />
                    </div>
                    <div>
                        <h5 className='text-gray-700 font-bold'>{authorName}</h5>
                        <span className='text-gray-500 text-sm'>{authorRole}</span>
                        <div>
                            <AiFillStar className='inline-block text-yellow-500 text-xs' />
                            <AiFillStar className='inline-block text-yellow-500 text-xs' />
                            <AiFillStar className='inline-block text-yellow-500 text-xs' />
                            <AiFillStar className='inline-block text-yellow-500 text-xs' />
                            <AiFillStar className='inline-block text-yellow-500 text-xs' />
                        </div>
                    </div>
                </div>
                <div className='my-5 flex items-center'>
                    <div className='flex items-center mr-5 text-gray-500'>
                        <FcReading className='mr-1' />
                        <p>{courseLessons} Lessons</p>
                    </div>
                    <div className='flex items-center mr-5 text-gray-500'>
                        <FcOvertime className='mr-1' />
                        <p>{courseHours} Hours</p>
                    </div>
                    <div className='flex items-center mr-5 text-gray-500'>
                        <FcBusinessman className='mr-1' />
                        <p>{courseStudents}</p>
                    </div>
                </div>
                <div className='my-5'>
                    <h3 className='text-gray-700 font-bold text-2xl cursor-pointer'>{courseTitle}</h3>
                </div>
                <div className='my-5'>
                    <Image src={courseImage} alt="Events" className='rounded-md cursor-pointer' width={370} height={270} />
                </div>
                <div className='flex justify-between items-center'>
                    <h5 className='text-blue-500 font-bold'>{coursePrice}</h5>
                    <div>
                        <Icons count={rate} />
                    </div>
                </div>
            </div>
            {/* Badge */}
            {
                badge && (
                    <div className='absolute top-4 right-4 bg-orange-500 text-white py-1 px-3 rounded-2xl'>
                        <span className='text-sm'>{badge}</span>
                    </div>
                )
            }
        </div>
    )
}

export default Card