import React from 'react';

import styled from 'styled-components';

import Card from './card/card';

import { AiOutlineArrowRight } from 'react-icons/ai';

const StyledCategory = styled.section`
    padding-top: 5rem;
    padding-bottom: 5rem;
    position: relative;
    background-image: url('/assets/images/banner.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
`;

function Category1() {
    return (
        <StyledCategory>
            <div className="container mx-auto px-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <Card imageUrl='/assets/images/category/1.jpg' name="Graphics Design" />
                    <Card imageUrl='/assets/images/category/2.jpg' name="Web Development" />
                    <Card imageUrl='/assets/images/category/3.jpg' name="UI UX Designer" />
                    <Card imageUrl='/assets/images/category/4.jpg' name="Data Sciences" />
                </div>
                <div className='mt-10'>
                    <button className='bg-blue-500 text-white py-2 px-8 rounded-md text-sm flex items-center mx-auto'>All Category <AiOutlineArrowRight className='ml-2' /> </button>
                </div>
            </div>
        </StyledCategory>
    )
}

export default Category1