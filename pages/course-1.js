import { Breadcrumb, Footer, Navbar } from "../components";
import { Course1 } from "../sections";

function Course() {
    return (
        <>
            <Navbar />
            <Breadcrumb title="Courses 1" />
            <Course1 />
            {/* Pagination */}
            <Footer />
        </>
    )
}

export default Course;