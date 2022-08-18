import { Breadcrumb, Footer, Navbar } from "../components";
import { Course1, CourseDetails1 } from "../sections";

function CourseDetailsPage() {
    return (
        <>
            <Navbar />
            <Breadcrumb title="Course Details" />
            <CourseDetails1 />
            <Course1 />
            <Footer />
        </>
    )
}

export default CourseDetailsPage;