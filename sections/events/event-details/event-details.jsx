import React from 'react';

import Image from 'next/image';

import EventMainImage from '../../../assets/images/event-details/event.jpg';

import InnerImage1 from '../../../assets/images/event-details/1.jpg';
import InnerImage2 from '../../../assets/images/event-details/2.jpg';

import { FcCheckmark } from 'react-icons/fc';

function EventDetails() {
    return (
        <div className='py-20'>
            <div className="container mx-auto px-10">
                <Image src={EventMainImage} alt="Event" />
                <div className='grid md:grid-cols-1 lg:grid-cols-3 gap-8'>
                    <div className='lg:col-span-2'>
                        <h3 className='text-gray-700 font-semibold my-5 text-5xl'>UI/UX Design & Development Contest 2022</h3>
                        <p className='text-gray-500 my-5'>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod te
                            invidunt. ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                            accusam. et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                            sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                            At vero eos et accusam et justo duo dolores et ea rebum.
                            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        </p>
                        <p className='text-gray-500 my-5'>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod te
                            invidunt. ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                            accusam. et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                            sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                            At vero eos et accusam et justo duo dolores et ea rebum.
                            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                        </p>
                        <div className='grid grid-cols-2 gap-8 my-5'>
                            <div>
                                <Image src={InnerImage1} alt="Inner" className='rounded-md cursor-pointer' />
                            </div>
                            <div>
                                <Image src={InnerImage2} alt="Inner" className='rounded-md cursor-pointer' />
                            </div>
                        </div>
                        <div className='my-5'>
                            <h3 className='text-gray-700 font-bold text-2xl'>Four major elements that we offer:</h3>
                            <ul>
                                <li className='my-2 text-gray-500 flex items-center'>
                                    <FcCheckmark className='mr-2' />
                                    Struggling to sell one multi-million dollar home currently on the market
                                </li>
                                <li className='my-2 text-gray-500 flex items-center'>
                                    <FcCheckmark className='mr-2' />
                                    The point of using Lorem Ipsum is that it has a normal distribution of letters.
                                </li>
                                <li className='my-2 text-gray-500 flex items-center'>
                                    <FcCheckmark className='mr-2' />
                                    Publishing packages and web page editors now use their default model text.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className='text-gray-500'>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod te invidunt.
                                ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam.
                                et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className='my-5 shadow-lg border border-slate-100 p-8'>
                            <h3 className='font-bold text-gray-700 text-lg'>Event Detail</h3>
                            <div>
                                <div className='flex items-center justify-between border-b border-slate-100 py-4'>
                                    <div className='flex items-center'>
                                        <FcCheckmark className='mr-2' />
                                        <p className='text-gray-500 font-semibold'>Start Date</p>
                                    </div>
                                    <p className='text-gray-500 font-semibold'>25 Dec, 2022</p>
                                </div>
                                <div className='flex items-center justify-between border-b border-slate-100 py-4'>
                                    <div className='flex items-center'>
                                        <FcCheckmark className='mr-2' />
                                        <p className='text-gray-500 font-semibold'> Start Time</p>
                                    </div>
                                    <p className='text-gray-500 font-semibold'>6:00 PM</p>
                                </div>
                                <div className='flex items-center justify-between border-b border-slate-100 py-4'>
                                    <div className='flex items-center'>
                                        <FcCheckmark className='mr-2' />
                                        <p className='text-gray-500 font-semibold'>End Date</p>
                                    </div>
                                    <p className='text-gray-500 font-semibold'>30 Nov, 2022</p>
                                </div>
                                <div className='flex items-center justify-between border-b border-slate-100 py-4'>
                                    <div className='flex items-center'>
                                        <FcCheckmark className='mr-2' />
                                        <p className='text-gray-500 font-semibold'>End Time</p>
                                    </div>
                                    <p className='text-gray-500 font-semibold'>12:00 PM</p>
                                </div>
                                <div className='flex items-center justify-between border-b border-slate-100 py-4'>
                                    <div className='flex items-center'>
                                        <FcCheckmark className='mr-2' />
                                        <p className='text-gray-500 font-semibold'>Ongoing</p>
                                    </div>
                                    <p className='text-gray-500 font-semibold'>983+</p>
                                </div>
                                <div className='flex items-center justify-between border-b border-slate-100 py-4'>
                                    <div className='flex items-center'>
                                        <FcCheckmark className='mr-2' />
                                        <p className='text-gray-500 font-semibold'>Location</p>
                                    </div>
                                    <p className='text-gray-500 font-semibold'>New Margania</p>
                                </div>
                            </div>
                            <div className='text-center mt-5'>
                                <button className='border border-blue-500 text-blue-500 px-4 py-2 rounded-md text-sm block my-2 mx-auto'>Price: 170.0$</button>
                                <button className='bg-blue-500 text-white px-4 py-2 rounded-md text-sm block my-2 mx-auto'>Book Your Seat Now!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventDetails