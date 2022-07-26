import { Breadcrumb, Footer, Navbar, Pagination, Searchbar } from "../components";
import { Course1 } from "../sections";

function Course() {
    return (
        <>
            <Navbar />
            <Breadcrumb title="Courses 1" />
            <Searchbar />
            <Course1 />
            <Pagination />
            <Footer />
        </>
    )
}

export default Course;