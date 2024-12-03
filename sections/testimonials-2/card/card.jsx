import React from 'react';

import Image from 'next/image';

import { AiFillStar } from 'react-icons/ai';

function Card({imageUrl, name, role}) {
    return (
        <div className='bg-white shadow-lg border border-slate-100 p-5'>
            <div>
                <AiFillStar className='inline-block text-yellow-500' />
                <AiFillStar className='inline-block text-yellow-500' />
                <AiFillStar className='inline-block text-yellow-500' />
                <AiFillStar className='inline-block text-yellow-500' />
                <AiFillStar className='inline-block text-yellow-500' />
            </div>
            <div className='my-10'>
                <q className='text-gray-500 text-lg'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore corporis labore eius, veritatis a ducimus aliquid libero,
                    delectus accusamus aspernatur nulla possimus repellendus debitis unde, molestiae et dignissimos ut? Non.
                </q>
            </div>
            <div className='flex'>
                <div className='mr-5'>
                    <Image src={imageUrl} alt="Testimonial" width={55} height={55} />
                </div>
                <div>
                    <h3 className='text-gray-700 font-bold text-lg'>{name}</h3>
                    <span className='text-blue-500 font-semibold text-sm'>{role}</span>
                </div>
            </div>
        </div>
    )
}

export default Card