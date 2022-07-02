import React from 'react';
import { AiOutlineBulb, AiOutlineBug, AiOutlineBranches, AiOutlineDribbble, AiOutlineDollarCircle, AiOutlineFire, AiOutlineFund, AiOutlineKey } from 'react-icons/ai';
import Card from './card/Card';

function Category2() {
    return (
        <section className='py-20 relative'>
            <div className="container mx-auto px-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <Card icon={<AiOutlineBulb className='mx-auto text-4xl text-blue-500 drop-shadow-md' />} name="Human Research" />
                    <Card icon={<AiOutlineBug className='mx-auto text-4xl text-blue-500 drop-shadow-md' />} name="Web Development" />
                    <Card icon={<AiOutlineBranches className='mx-auto text-4xl text-blue-500 drop-shadow-md' />} name="UI/UX Design" />
                    <Card icon={<AiOutlineDribbble className='mx-auto text-4xl text-blue-500 drop-shadow-md' />} name="Data Sciences" />
                    <Card icon={<AiOutlineDollarCircle className='mx-auto text-4xl text-blue-500 drop-shadow-md' />} name="Human Research" />
                    <Card icon={<AiOutlineFire className='mx-auto text-4xl text-blue-500 drop-shadow-md' />} name="Web Development" />
                    <Card icon={<AiOutlineFund className='mx-auto text-4xl text-blue-500 drop-shadow-md' />} name="UI/UX Design" />
                    <Card icon={<AiOutlineKey className='mx-auto text-4xl text-blue-500 drop-shadow-md' />} name="Data Sciences" />
                </div>
            </div>
        </section>
    )
}

export default Category2