import React from 'react';

import { FcBookmark, FcBullish, FcCableRelease, FcClapperboard } from 'react-icons/fc';

import Card from './card/card';

function Offer() {
    return (
        <section className='py-20 relative'>
            <div className="container mx-auto px-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <Card icon={<FcBookmark className='text-6xl'/>} name='Expert Instruction'  />
                    <Card icon={<FcBullish className='text-6xl'/>} name='Video Tutorial'  />
                    <Card icon={<FcCableRelease className='text-6xl'/>} name='Lifetime Access'  />
                    <Card icon={<FcClapperboard className='text-6xl'/>} name='Learn From anywhere'  />
                </div>
            </div>
        </section>
    )
}

export default Offer