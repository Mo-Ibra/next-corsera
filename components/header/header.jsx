import React from 'react';

import styled from 'styled-components';

import Image from 'next/image';

export const StyledHeader = styled.header`
    padding-top: 5rem;
    padding-bottom: 5rem;
    background-image: url('/assets/images/header-images/images/banner.jpg');
`;

function Header() {
    return (
        <StyledHeader>
            <div className="container mx-auto px-10">
                <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8">
                    <div className='mt-20 relative'>
                        <div className='z-20'>
                            <span className='text-blue-500 font-bold text-lg uppercase border-l-2 pl-2 border-blue-500'>Better Learning Future With Us!</span>
                            <h2 className='text-6xl font-bold text-gray-800 my-4'>Committed To Learn Excellence In Education</h2>
                            <p className='text-gray-500'>It is long established that a reader will be distracted by the readable popular and best content.</p>
                            <button className='bg-blue-500 text-white py-2 px-6 rounded-sm my-4 cursor-pointer'>Get Started Today!</button>
                        </div>
                        <div className='absolute top-90 left-0'>
                            <Image src='/assets/images/header-images/images/arrow.png' width={285} height={258} />
                        </div>
                    </div>
                    <div className='relative'>
                        <div>
                            <Image src='/assets/images/header-images/images/girl.png' width={703} height={854} />
                        </div>
                        <div className="absolute top-0 right-0">
                            <Image src='/assets/images/header-images/images/girl-bg.png' width={772} height={736} />
                        </div>
                    </div>
                    <div className='absolute top-0 left-0'>
                        <Image src='/assets/images/header-images/images/shape.png' width={89} height={102} />
                    </div>
                </div>
            </div>
        </StyledHeader>
    )
}

export default Header