import { Breadcrumb, Footer, Navbar, Pagination } from "../components";
import { CoursesWithSidebar } from "../sections";

function CoursesWithSidebarPage() {
    return (
        <>
            <Navbar />
            <Breadcrumb title="Courses With Sidebar"/>
            <CoursesWithSidebar />
            <Pagination />
            <Footer />
        </>
    )
}

export default CoursesWithSidebarPage;