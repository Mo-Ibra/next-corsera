import React from 'react';
import { AiOutlineApple, AiOutlineFieldTime, AiOutlineUsergroupDelete, AiOutlineMedicineBox } from 'react-icons/ai'

function WhyUs1({backgroundColor}) {
    return (
        <section className={`py-10 ${backgroundColor}`}>
            <div className="container mx-auto px-10">
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className='bg-white shadow-lg rounded-lg p-8'>
                        <div className="flex items-center">
                            <div className="iconProvider mr-8">
                                <AiOutlineApple className='text-3xl text-blue-500' />
                            </div>
                            <div className="description">
                                <h3 className='text-2xl font-bold text-gray-700 my-2'>Remote Working Facilities</h3>
                                <p className='text-gray-500'>
                                    Credibly syndicate enterprise total linkage
                                    whereas cost effective innovate state of the art
                                    data without multifunctional.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white shadow-lg rounded-lg p-8'>
                        <div className="flex items-center">
                            <div className="iconProvider mr-8">
                                <AiOutlineFieldTime className='text-3xl text-blue-500' />
                            </div>
                            <div className="description">
                                <h3 className='text-2xl font-bold text-gray-700 my-2'>Flexible Working Hours</h3>
                                <p className='text-gray-500'>
                                    Credibly syndicate enterprise total linkage
                                    whereas cost effective innovate state of the art
                                    data without multifunctional.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white shadow-lg rounded-lg p-8'>
                        <div className="flex items-center">
                            <div className="iconProvider mr-8">
                                <AiOutlineUsergroupDelete className='text-3xl text-blue-500' />
                            </div>
                            <div className="description">
                                <h3 className='text-2xl font-bold text-gray-700 my-2'>Friendly Skilled Team</h3>
                                <p className='text-gray-500'>
                                    Credibly syndicate enterprise total linkage
                                    whereas cost effective innovate state of the art
                                    data without multifunctional.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white shadow-lg rounded-lg p-8'>
                        <div className="flex items-center">
                            <div className="iconProvider mr-8">
                                <AiOutlineMedicineBox className='text-3xl text-blue-500' />
                            </div>
                            <div className="description">
                                <h3 className='text-2xl font-bold text-gray-700 my-2'>Medical Insurance Facilities</h3>
                                <p className='text-gray-500'>
                                    Credibly syndicate enterprise total linkage
                                    whereas cost effective innovate state of the art
                                    data without multifunctional.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUs1