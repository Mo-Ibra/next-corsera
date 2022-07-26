import React from 'react';

import AuthorImg1 from '../../../assets/images/testimonials/1.png';
import AuthorImg2 from '../../../assets/images/testimonials/2.png';

import CourseImg1 from '../../../assets/images/course/1.jpg';
import CourseImg2 from '../../../assets/images/course/2.jpg';

import Card from './card/card';

function Course2() {
    return (
        <section className='py-10 relative'>
            <div className="container mx-auto px-10">
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                    <Card authorUrl={AuthorImg1}
                        authorName="Mohamed Ibrahim"
                        authorRole="Wordpress Experts"
                        courseLessons="32"
                        courseHours="8"
                        courseStudents="1230"
                        courseTitle="How To Create Word Press Themes & Plugins Like Experts?"
                        courseImage={CourseImg1}
                        coursePrice="49$"
                        rate={5}
                        badge="Newest"
                    />
                    <Card authorUrl={AuthorImg2}
                        authorName="John Doe"
                        authorRole="Javascript Developer"
                        courseLessons="32"
                        courseHours="8"
                        courseStudents="1230"
                        courseTitle="Introduction to Javascript for The Beginners Learners"
                        courseImage={CourseImg2}
                        coursePrice="Free"
                        rate={5}
                        badge="Featured"
                    />
                </div>
            </div>
            {/* <ShapesOne /> */}
        </section>
    )
}

export default Course2