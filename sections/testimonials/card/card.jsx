import React from 'react';

import Image from 'next/image';

import { AiFillStar } from 'react-icons/ai';

function Card({imageUrl, name, role, description}) {
    return (
        <div className='bg-white shadow-lg border border-slate-100 p-5'>
            <div className='flex items-center my-5'>
                <div className='mr-5'>
                    <Image src={imageUrl} alt="Testimonial" />
                </div>
                <div>
                    <h3 className='text-gray-700 font-bold text-lg'>{name}</h3>
                    <span className='text-gray-500 text-sm'>{role}</span>
                </div>
            </div>
            <div>
                <p className='text-gray-500'>
                    {description}
                </p>
            </div>
            <div className='my-5'>
                <AiFillStar className='inline-block text-yellow-500' />
                <AiFillStar className='inline-block text-yellow-500' />
                <AiFillStar className='inline-block text-yellow-500' />
                <AiFillStar className='inline-block text-yellow-500' />
                <AiFillStar className='inline-block text-yellow-500' />
            </div>
        </div>
    )
}

export default Card