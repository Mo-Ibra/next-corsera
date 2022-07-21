import { Breadcrumb, Footer, Navbar } from "../components";
import { Features, Offer, Testimonials2 } from "../sections";

function FeaturesPage() {
    return (
        <>
            <Navbar />
            <Breadcrumb title="Features" />
            <Features />
            <Testimonials2 />
            <Offer />
            <Footer />
        </>
    )
}

export default FeaturesPage;