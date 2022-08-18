// Course Image
import CourseImg1 from '../../assets/images/course/1.jpg';
import CourseImg2 from '../../assets/images/course/2.jpg';

// Avatar Image
import AvatarImg1 from '../../assets/images/avatars/1.jpg';
import AvatarImg2 from '../../assets/images/avatars/2.jpg';

import Card from './card/card';

const CoursesWithSidebar = () => {
    return (
        <section className="py-10">
            <div className="container mx-auto px-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    <Card imageUrl={CourseImg1} avatarUrl={AvatarImg1} author="John Doe" rate="4.9" name="Web Development Tutorial: How to create full website" numberOfStudents="290" numberOfLessons="80" price="40" />
                    <Card imageUrl={CourseImg2} avatarUrl={AvatarImg2} author="John Doe" rate="4.9" name="Web Development Tutorial: How to create full website" numberOfStudents="290" numberOfLessons="80" price="40" />
                    <div>
                        <div className='p-5 bg-slate-100'>
                            <h3 className='text-2xl font-bold text-gray-900'>Sort By</h3>
                            <div className='border-b border-gray-500 my-5' />
                            <div>
                                <div className='flex items-center gap-2 my-5'>
                                    <input type="checkbox" id='newest' className='h-4 w-4' />
                                    <label htmlFor="newest" className='text-sm font-semibold text-gray-700'>Newest</label>
                                </div>
                                <div className='flex items-center gap-2 my-5'>
                                    <input type="checkbox" id='oldest' className='h-4 w-4' />
                                    <label htmlFor="oldest" className='text-sm font-semibold text-gray-700'>Oldest</label>
                                </div>
                                <div className='flex items-center gap-2 my-5'>
                                    <input type="checkbox" id='popular' className='h-4 w-4' />
                                    <label htmlFor="popular" className='text-sm font-semibold text-gray-700'>Popular</label>
                                </div>
                                <div className='flex items-center gap-2 my-5'>
                                    <input type="checkbox" id='featured' className='h-4 w-4' />
                                    <label htmlFor="featured" className='text-sm font-semibold text-gray-700'>Featured</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CoursesWithSidebar;