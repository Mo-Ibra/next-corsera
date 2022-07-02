import React from 'react';
import './team.scss';

// Team Images
import TeamImg1 from '../../../assets/images/team3/1.jpg';
import TeamImg2 from '../../../assets/images/team3/2.jpg';
import TeamImg3 from '../../../assets/images/team3/3.jpg';
import TeamImg4 from '../../../assets/images/team3/4.jpg';

import Card from './Card/Card';

function Team3() {
    return (
        <section className='py-20 background-image-2'>
            <div className="container mx-auto px-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <Card imageUrl={TeamImg1} name="James Carlson" role="Wordpress developer" />
                    <Card imageUrl={TeamImg2} name="James Carlson" role="Wordpress developer" />
                    <Card imageUrl={TeamImg3} name="James Carlson" role="Wordpress developer" />
                    <Card imageUrl={TeamImg4} name="James Carlson" role="Wordpress developer" />
                </div>
            </div>
        </section>
    )
}

export default Team3