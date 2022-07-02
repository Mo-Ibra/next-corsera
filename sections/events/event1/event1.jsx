import React from 'react';

import EventImg1 from '../../../assets/images/events/1.jpg';
import EventImg2 from '../../../assets/images/events/2.jpg';
import EventImg3 from '../../../assets/images/events/3.jpg';
import EventImg4 from '../../../assets/images/events/4.jpg';

import Card from './card/Card';

function Event1() {
    return (
        <section className='py-20 relative'>
            <div className="container mx-auto px-10">
                <Card imageUrl={EventImg1} name="Consumer Food Safety Education Conference" day="15th December 2022" hour="10:00 AM" place="IAC Building, New York, NY" />
                <Card imageUrl={EventImg2} name="Consumer Food Safety Education Conference" day="15th December 2022" hour="10:00 AM" place="IAC Building, New York, NY" />
                <Card imageUrl={EventImg3} name="Consumer Food Safety Education Conference" day="15th December 2022" hour="10:00 AM" place="IAC Building, New York, NY" />
                <Card imageUrl={EventImg4} name="Consumer Food Safety Education Conference" day="15th December 2022" hour="10:00 AM" place="IAC Building, New York, NY" />
            </div>
            {/* <ShapesThree /> */}
        </section>
    )
}

export default Event1