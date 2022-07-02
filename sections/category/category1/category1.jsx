import React from 'react';

import CategoryImg1 from '../../../assets/images/category/1.jpg';
import CategoryImg2 from '../../../assets/images/category/2.jpg';
import CategoryImg3 from '../../../assets/images/category/3.jpg';
import CategoryImg4 from '../../../assets/images/category/4.jpg';

import Card from './card/card';

import { AiOutlineArrowRight } from 'react-icons/ai';

function Category1() {

    return (
        <section className='py-20 relative'>
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
        </section>
    )
}

export default Category1