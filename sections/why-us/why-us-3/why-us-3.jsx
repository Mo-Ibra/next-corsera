import React from 'react';
import { AiFillAccountBook } from 'react-icons/ai';
import Image from 'next/image';

function WhyUs3() {
    return (
        <section className='py-20 relative'>
            <div className="container mx-auto px-10">
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                        <Image src='/assets/images/sections/5.png' width={719} height={612} alt="WhyUs?" />
                    </div>
                    <div>
                        <span className='uppercase text-blue-500 font-bold'>WHY YOU WILL CHOOSE GUIDENCE</span>
                        <h2 className='text-5xl font-bold text-gray-700 my-5'>Creating A Community Of Life Long Learners</h2>
                        <p className='text-gray-500 border-l-2 border-blue-500 pl-4 mt-10 mb-5'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse varius enim in eros elementum tristique.
                            Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                        </p>
                        <div className='flex my-10'>
                            <div className='mr-5 flex items-center'>
                                <AiFillAccountBook className='mr-2 text-orange-500 text-4xl' />
                                <h3 className='font-semibold drop-shadow-sm text-gray-700 text-sm md:text-lg'>2000+ Verified Course</h3>
                            </div>
                            <div className='mr-5 flex items-center'>
                                <AiFillAccountBook className='mr-2 text-orange-500 text-4xl' />
                                <h3 className='font-semibold drop-shadow-sm text-gray-700 text-sm md:text-lg'>256+ Free Videos</h3>
                            </div>
                        </div>
                        <div className='flex my-10'>
                            <div className='mr-5 flex items-center'>
                                <AiFillAccountBook className='mr-2 text-orange-500 text-4xl' />
                                <h3 className='font-semibold drop-shadow-sm text-gray-700 text-sm md:text-lg'>2000+ Verified Course</h3>
                            </div>
                            <div className='mr-5 flex items-center'>
                                <AiFillAccountBook className='mr-2 text-orange-500 text-4xl' />
                                <h3 className='font-semibold drop-shadow-sm text-gray-700 text-sm md:text-lg'>256+ Free Videos</h3>
                            </div>
                        </div>
                        <button className='bg-blue-500 text-white py-2 px-8 rounded-md'>Explore Course</button>
                    </div>
                </div>
            </div>
            {/* <ShapesTwo /> */}
        </section>
    )
}

export default WhyUs3