import React from 'react';

import Image from 'next/image';

import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';

const StyledTeam = styled.section`
    padding-top: 5rem;
    padding-bottom: 5rem;
    position: relative;
    background-image: url('/assets/images/banner-2.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
`

function Team() {
    return (
        <StyledTeam>
            <div className="container mx-auto px-10">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-5">
                    <div className='cursor-pointer relative'>
                        <Image src='/assets/images/team/1.jpg' width={270} height={320} />
                        <div className='absolute bottom-0 left-2'>
                            <div className="bg-white shadow-lg py-2 px-4 rounded-md">
                                <h3 className='text-gray-600 font-bold text-lg'>James Carlson</h3>
                                <span className='text-sm text-blue-500 font-semibold'>WordPress Expert</span>
                                <div>
                                    <AiFillStar className='text-yellow-500 inline-block text-sm' />
                                    <AiFillStar className='text-yellow-500 inline-block text-sm' />
                                    <AiFillStar className='text-yellow-500 inline-block text-sm' />
                                    <AiFillStar className='text-yellow-500 inline-block text-sm' />
                                    <AiFillStar className='text-yellow-500 inline-block text-sm' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='cursor-pointer relative'>
                        <Image src='/assets/images/team/2.jpg' width={270} height={320} />
                        <div className='absolute bottom-0 left-2'>
                            <div className="bg-white shadow-lg py-2 px-4 rounded-md">
                                <h3 className='text-gray-600 font-bold text-lg'>Nancy Phipps</h3>
                                <span className='text-sm text-blue-500 font-semibold'>Product Manger</span>
                                <div>
                                    <AiFillStar className='text-yellow-500 inline-block text-sm' />
                                    <AiFillStar className='text-yellow-500 inline-block text-sm' />
                                    <AiFillStar className='text-yellow-500 inline-block text-sm' />
                                    <AiFillStar className='text-yellow-500 inline-block text-sm' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='cursor-pointer relative'>
                        <Image src='/assets/images/team/3.jpg' width={270} height={320} />
                        <div className='absolute bottom-0 left-2'>
                            <div className="bg-white shadow-lg py-2 px-4 rounded-md">
                                <h3 className='text-gray-600 font-bold text-lg'>Troy Hall</h3>
                                <span className='text-sm text-blue-500 font-semibold'>Content Writer</span>
                                <div>
                                    <AiFillStar className='text-yellow-500 inline-block text-sm' />
                                    <AiFillStar className='text-yellow-500 inline-block text-sm' />
                                    <AiFillStar className='text-yellow-500 inline-block text-sm' />
                                    <AiFillStar className='text-yellow-500 inline-block text-sm' />
                                    <AiFillStar className='text-yellow-500 inline-block text-sm' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='cursor-pointer relative'>
                        <Image src='/assets/images/team/4.jpg' width={270} height={320} />
                        <div className='absolute bottom-0 left-2'>
                            <div className="bg-white shadow-lg py-2 px-4 rounded-md">
                                <h3 className='text-gray-600 font-bold text-lg'>Isabelle Bruner</h3>
                                <span className='text-sm text-blue-500 font-semibold'>UI/UX Designer</span>
                                <div>
                                    <AiFillStar className='text-yellow-500 inline-block text-sm' />
                                    <AiFillStar className='text-yellow-500 inline-block text-sm' />
                                    <AiFillStar className='text-yellow-500 inline-block text-sm' />
                                    <AiFillStar className='text-yellow-500 inline-block text-sm' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </StyledTeam>
    )
};

export default Team;