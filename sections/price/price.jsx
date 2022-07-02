import React from 'react';
import Card from './card/card';

function Price() {
    return (
        <section className='py-20 relative'>
            <div className="container mx-auto px-10">
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10">
                    <Card name="Basic Plan" price="13.00" />
                    <Card name="Premium Plan" price="20.00" badge="Popular" />
                    <Card name="Advanced Plan" price="30.00" />
                </div>
            </div>
        </section>
    )
}

export default Price