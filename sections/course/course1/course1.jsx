import React from 'react';
// import './course.scss';

import Card from './card/card';

function Course1() {
    return (
        <section className='py-10 background-image relative'>
            <div className="container mx-auto px-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card imageUrl='/assets/images/course/1.jpg' avatarUrl='/assets/images/avatars/1.jpg' author="John Doe" rate="4.9" name="Web Development Tutorial: How to create full website" numberOfStudents="290" numberOfLessons="80" price="40" />
                    <Card imageUrl='/assets/images/course/2.jpg' avatarUrl='/assets/images/avatars/2.jpg' author="John Doe" rate="4.9" name="Web Development Tutorial: How to create full website" numberOfStudents="290" numberOfLessons="80" price="40" />
                    <Card imageUrl='/assets/images/course/3.jpg' avatarUrl='/assets/images/avatars/3.jpg' author="John Doe" rate="4.9" name="Web Development Tutorial: How to create full website" numberOfStudents="290" numberOfLessons="80" price="40" />
                    <Card imageUrl='/assets/images/course/4.jpg' avatarUrl='/assets/images/avatars/4.jpg' author="John Doe" rate="4.9" name="Web Development Tutorial: How to create full website" numberOfStudents="290" numberOfLessons="80" price="40" />
                    <Card imageUrl='/assets/images/course/5.jpg' avatarUrl='/assets/images/avatars/5.jpg' author="John Doe" rate="4.9" name="Web Development Tutorial: How to create full website" numberOfStudents="290" numberOfLessons="80" price="40" />
                    <Card imageUrl='/assets/images/course/6.jpg' avatarUrl='/assets/images/avatars/6.jpg' author="John Doe" rate="4.9" name="Web Development Tutorial: How to create full website" numberOfStudents="290" numberOfLessons="80" price="40" />
                </div>
            </div>
            {/* <ShapesThree /> */}
        </section>
    )
}

export default Course1