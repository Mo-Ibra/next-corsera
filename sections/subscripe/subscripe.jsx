import React from 'react';
import styled from 'styled-components';

const StyledSubscripe = styled.section`
    background-color: #525FE1;
    padding-top: 5rem;
    padding-bottom: 5rem;
    position: relative;
`

function Subscripe() {
    return (
        <StyledSubscripe>
            <div className="container mx-auto px-10">
                <div className='text-center'>
                    <span className='text-white text-lg font-semibold'>SUBSCRIBE NEWSLETTER</span>
                    <h2 className='text-white font-bold text-5xl my-2'>Get Every Latest News</h2>
                    <input type="text" placeholder='Enter your mail address.' className='w-2/4 p-3 mt-8 rounded-md outline-none text-gray-500' />
                </div>
            </div>
        </StyledSubscripe>
    )
}

export default Subscripe