import { Breadcrumb, Footer, Navbar } from "../components";
import { Category3, Testimonials } from "../sections";

function TestimonialsPage() {
    return (
        <>
            <Navbar />
            <Breadcrumb title="Testimonials" />
            <Testimonials />
            <Category3 />
            <Footer />
        </>
    )
}

export default TestimonialsPage;