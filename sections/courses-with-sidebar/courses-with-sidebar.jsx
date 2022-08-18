// Course Image
import CourseImg1 from '../../assets/images/course/1.jpg';
import CourseImg2 from '../../assets/images/course/2.jpg';

// Avatar Image
import AvatarImg1 from '../../assets/images/avatars/1.jpg';
import AvatarImg2 from '../../assets/images/avatars/2.jpg';

import Card from './card/card';

import Sidebar from './sidebar/sidebar';

const CoursesWithSidebar = () => {
    return (
        <section className="py-10">
            <div className="container mx-auto px-10">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
                    <div className="col-span-2">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <Card imageUrl={CourseImg1} avatarUrl={AvatarImg1} author="John Doe" rate="4.9" name="Web Development Tutorial: How to create full website" numberOfStudents="290" numberOfLessons="80" price="40" />
                            <Card imageUrl={CourseImg2} avatarUrl={AvatarImg2} author="John Doe" rate="4.9" name="Web Development Tutorial: How to create full website" numberOfStudents="290" numberOfLessons="80" price="40" />
                        </div>
                    </div>
                    <div>
                        <Sidebar />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CoursesWithSidebar;