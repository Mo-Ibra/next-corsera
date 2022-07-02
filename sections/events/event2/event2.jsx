import React from 'react';

import EventImg1 from '../../../assets/images/event/1.jpg';
import EventImg2 from '../../../assets/images/event/2.jpg';
import EventImg3 from '../../../assets/images/event/3.jpg';

import Card from './card/card';

function Event2() {
    return (
        <section className='py-20 relative'>
            <div className="container mx-auto px-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card imageUrl={EventImg1} name="Innovation & Technological Entrepreneurship Team" />
                    <Card imageUrl={EventImg2} name="Innovation & Technological Entrepreneurship Team" />
                    <Card imageUrl={EventImg3} name="Innovation & Technological Entrepreneurship Team" />
                </div>
            </div>
            {/* <ShapesTwo /> */}
        </section>
    )
}

export default Event2