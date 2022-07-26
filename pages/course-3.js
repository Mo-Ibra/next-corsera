import { Breadcrumb, Footer, Navbar, Pagination, Searchbar } from "../components";
import { Course1, Course2 } from "../sections";

function Course() {
    return (
        <>
            <Navbar />
            <Breadcrumb title="Courses 3" />
            <Searchbar />
            <Course2 />
            <Pagination />
            <Footer />
        </>
    )
}

export default Course;