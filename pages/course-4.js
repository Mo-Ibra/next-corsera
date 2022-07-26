import { Breadcrumb, Footer, Navbar, Pagination, Searchbar } from "../components";

function Course() {
    return (
        <>
            <Navbar />
            <Breadcrumb title="Courses 4" />
            <Searchbar />
            {/* <Course3 /> */}
            <Pagination />
            <Footer />
        </>
    )
}

export default Course;