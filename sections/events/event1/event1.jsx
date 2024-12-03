import React from 'react';

import Card from './card/Card';

function Event1() {
    return (
        <section className='py-20 relative'>
            <div className="container mx-auto px-10">
                <Card imageUrl='/assets/images/events/1.jpg' name="Consumer Food Safety Education Conference" day="15th December 2022" hour="10:00 AM" place="IAC Building, New York, NY" />
                <Card imageUrl='/assets/images/events/2.jpg' name="Consumer Food Safety Education Conference" day="15th December 2022" hour="10:00 AM" place="IAC Building, New York, NY" />
                <Card imageUrl='/assets/images/events/3.jpg' name="Consumer Food Safety Education Conference" day="15th December 2022" hour="10:00 AM" place="IAC Building, New York, NY" />
                <Card imageUrl='/assets/images/events/4.jpg' name="Consumer Food Safety Education Conference" day="15th December 2022" hour="10:00 AM" place="IAC Building, New York, NY" />
            </div>
            {/* <ShapesThree /> */}
        </section>
    )
}

export default Event1