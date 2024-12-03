import Card from "./card/card";

import Sidebar from "./sidebar/sidebar";

const CoursesWithSidebar = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="col-span-2">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Card
                imageUrl="/assets/images/course/1.jpg"
                avatarUrl="/assets/images/avatars/1.jpg"
                author="John Doe"
                rate="4.9"
                name="Web Development Tutorial: How to create full website"
                numberOfStudents="290"
                numberOfLessons="80"
                price="40"
              />
              <Card
                imageUrl="/assets/images/course/2.jpg"
                avatarUrl="/assets/images/avatars/2.jpg"
                author="John Doe"
                rate="4.9"
                name="Web Development Tutorial: How to create full website"
                numberOfStudents="290"
                numberOfLessons="80"
                price="40"
              />
            </div>
          </div>
          <div>
            <Sidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesWithSidebar;
