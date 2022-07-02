import React from 'react';

import {
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineTwitter,
    AiFillLinkedin,
    AiOutlineFastForward
} from 'react-icons/ai';

function Footer() {
    return (
        <section className='pt-20 pb-5 bg-gray-900 text-white relative'>
            <div className="container mx-auto px-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        {/* <Image src='' alt="Logo" className='my-5' /> */}
                        <p className='text-gray-500 text-sm my-5'>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page
                            when looking at its layout.
                            The point of using Lorem Ipsum
                        </p>
                        <div className='my-5'>
                            <AiOutlineFacebook className='text-blue-500 cursor-pointer inline-block mr-5 text-2xl' />
                            <AiOutlineInstagram className='text-blue-500 cursor-pointer inline-block mr-5 text-2xl' />
                            <AiOutlineTwitter className='text-blue-500 cursor-pointer inline-block mr-5 text-2xl' />
                            <AiFillLinkedin className='text-blue-500 cursor-pointer inline-block mr-5 text-2xl' />
                        </div>
                    </div>
                    <div>
                        <h3 className='my-5 font-bold text-2xl'>Explore</h3>
                        <ul>
                            <li className='text-gray-200 my-4 cursor-pointer flex items-center'>
                                <AiOutlineFastForward className='text-gray-500 mr-2' />About Us
                            </li>
                            <li className='text-gray-200 my-4 cursor-pointer flex items-center'>
                                <AiOutlineFastForward className='text-gray-500 mr-2' />Comming Soon
                            </li>
                            <li className='text-gray-200 my-4 cursor-pointer flex items-center'>
                                <AiOutlineFastForward className='text-gray-500 mr-2' />Blog & News
                            </li>
                            <li className='text-gray-200 my-4 cursor-pointer flex items-center'>
                                <AiOutlineFastForward className='text-gray-500 mr-2' />Faq Questions
                            </li>
                            <li className='text-gray-200 my-4 cursor-pointer flex items-center'>
                                <AiOutlineFastForward className='text-gray-500 mr-2' />Testimonials
                            </li>
                            <li className='text-gray-200 my-4 cursor-pointer flex items-center'>
                                <AiOutlineFastForward className='text-gray-500 mr-2' />Privacy Police
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='my-5 font-bold text-2xl'>Useful Links</h3>
                        <ul>
                            <li className='text-gray-200 my-4 cursor-pointer flex items-center'>
                                <AiOutlineFastForward className='text-gray-500 mr-2' />Contact Us
                            </li>
                            <li className='text-gray-200 my-4 cursor-pointer flex items-center'>
                                <AiOutlineFastForward className='text-gray-500 mr-2' />Pricing Plan
                            </li>
                            <li className='text-gray-200 my-4 cursor-pointer flex items-center'>
                                <AiOutlineFastForward className='text-gray-500 mr-2' />Profile
                            </li>
                            <li className='text-gray-200 my-4 cursor-pointer flex items-center'>
                                <AiOutlineFastForward className='text-gray-500 mr-2' />Faq
                            </li>
                            <li className='text-gray-200 my-4 cursor-pointer flex items-center'>
                                <AiOutlineFastForward className='text-gray-500 mr-2' />Popular Courses
                            </li>
                            <li className='text-gray-200 my-4 cursor-pointer flex items-center'>
                                <AiOutlineFastForward className='text-gray-500 mr-2' />Terms and Conditions
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='my-5 font-bold text-2xl'>Contact Info</h3>
                        <ul>
                            <li className='text-gray-200 my-4 cursor-pointer flex items-center'>
                                275 Quadra Street Victoria Road, New York
                            </li>
                            <li className='text-gray-200 my-4 cursor-pointer flex items-center'>
                                + 1 (123) 456-7891
                            </li>
                            <li className='text-gray-200 my-4 cursor-pointer flex items-center'>
                                + 2 (237) 456-9872
                            </li>
                            <li className='text-gray-200 my-4 cursor-pointer flex items-center'>
                                yourmailaddress@example.com
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className='my-5 border-t border-slate-50' />
                <div className='text-center text-gray-400'>
                    <p>Copyright 2022. All Rights Reserved</p>
                </div>
            </div>
        </section>
    )
}

export default Footer