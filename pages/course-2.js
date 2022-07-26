import { Breadcrumb, Footer, Navbar, Pagination } from "../components";
import { Course1 } from "../sections";

function Course() {
    return (
        <>
            <Navbar />
            <Breadcrumb title="Courses 2" />
            <Course1 />
            <Pagination />
            <Footer />
        </>
    )
}

export default Course;