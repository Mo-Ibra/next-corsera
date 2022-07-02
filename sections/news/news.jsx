import React from 'react';

// Images
import NewsImg1 from '../../assets/images/blog2/1.jpg';
import NewsImg2 from '../../assets/images/blog2/2.jpg';

import Card from './card/card';

function News() {
    return (
        <section className='py-20 background-image relative'>
            <div className="container mx-auto px-10">
                <div className="flex justify-between items-center">
                    <div>
                        <span className='uppercase text-blue-500 font-bold text-2xl'>Blog & News</span>
                        <h2 className='text-4xl font-bold text-gray-700'>Trending on Our Blogs</h2>
                    </div>
                    <div>
                        <button className='bg-blue-500 text-white py-4 px-8 rounded-md'>Read More Blogs</button>
                    </div>
                </div>
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 my-10">
                    <Card category="Education" title="10 Things Successful Whick Makes You Different From Others" date="06 Nov, 2022" author="Admin" imageUrl={NewsImg1} />
                    <Card category="Education" title="How To Start Your Online Study From Home And Improve Your Skills?" date="22 Oct, 2022" author="Mohamed" imageUrl={NewsImg2} />
                </div>
            </div>
            {/* <ShapesThree /> */}
        </section>
    )
}

export default News