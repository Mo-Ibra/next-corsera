import React from 'react';
// import './course.scss';

// Course Image
import CourseImg1 from '../../../assets/images/course/1.jpg';
import CourseImg2 from '../../../assets/images/course/2.jpg';
import CourseImg3 from '../../../assets/images/course/3.jpg';
import CourseImg4 from '../../../assets/images/course/4.jpg';
import CourseImg5 from '../../../assets/images/course/5.jpg';
import CourseImg6 from '../../../assets/images/course/6.jpg';

// Avatar Image
import AvatarImg1 from '../../../assets/images/avatars/1.jpg';
import AvatarImg2 from '../../../assets/images/avatars/2.jpg';
import AvatarImg3 from '../../../assets/images/avatars/3.jpg';
import AvatarImg4 from '../../../assets/images/avatars/4.jpg';
import AvatarImg5 from '../../../assets/images/avatars/5.jpg';
import AvatarImg6 from '../../../assets/images/avatars/6.jpg';

import Card from './card/card';

function Course1() {
    return (
        <section className='py-10 background-image relative'>
            <div className="container mx-auto px-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card imageUrl={CourseImg1} avatarUrl={AvatarImg1} author="John Doe" rate="4.9" name="Web Development Tutorial: How to create full website" numberOfStudents="290" numberOfLessons="80" price="40" />
                    <Card imageUrl={CourseImg2} avatarUrl={AvatarImg2} author="John Doe" rate="4.9" name="Web Development Tutorial: How to create full website" numberOfStudents="290" numberOfLessons="80" price="40" />
                    <Card imageUrl={CourseImg3} avatarUrl={AvatarImg3} author="John Doe" rate="4.9" name="Web Development Tutorial: How to create full website" numberOfStudents="290" numberOfLessons="80" price="40" />
                    <Card imageUrl={CourseImg4} avatarUrl={AvatarImg4} author="John Doe" rate="4.9" name="Web Development Tutorial: How to create full website" numberOfStudents="290" numberOfLessons="80" price="40" />
                    <Card imageUrl={CourseImg5} avatarUrl={AvatarImg5} author="John Doe" rate="4.9" name="Web Development Tutorial: How to create full website" numberOfStudents="290" numberOfLessons="80" price="40" />
                    <Card imageUrl={CourseImg6} avatarUrl={AvatarImg6} author="John Doe" rate="4.9" name="Web Development Tutorial: How to create full website" numberOfStudents="290" numberOfLessons="80" price="40" />
                </div>
            </div>
            {/* <ShapesThree /> */}
        </section>
    )
}

export default Course1