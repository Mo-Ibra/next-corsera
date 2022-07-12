import React from 'react';

import styled from 'styled-components';

import Banner from '../../../assets/images/banner.jpg';

import CategoryImg1 from '../../../assets/images/category/1.jpg';
import CategoryImg2 from '../../../assets/images/category/2.jpg';
import CategoryImg3 from '../../../assets/images/category/3.jpg';
import CategoryImg4 from '../../../assets/images/category/4.jpg';

import Card from './card/card';

import { AiOutlineArrowRight } from 'react-icons/ai';

const StyledCategory = styled.section`
    padding-top: 5rem;
    padding-bottom: 5rem;
    position: relative;
    background-image: url(${Banner.src});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
`;

function Category1() {
    return (
        <StyledCategory>
            <div className="container mx-auto px-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <Card imageUrl={CategoryImg1} name="Graphics Design" />
                    <Card imageUrl={CategoryImg2} name="Web Development" />
                    <Card imageUrl={CategoryImg3} name="UI UX Designer" />
                    <Card imageUrl={CategoryImg4} name="Data Sciences" />
                </div>
                <div className='mt-10'>
                    <button className='bg-blue-500 text-white py-2 px-8 rounded-md text-sm flex items-center mx-auto'>All Category <AiOutlineArrowRight className='ml-2' /> </button>
                </div>
            </div>
        </StyledCategory>
    )
}

export default Category1