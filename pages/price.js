import { Breadcrumb, Footer, Navbar } from "../components";
import { Offer, Price, Testimonials } from "../sections";

function PricePage() {
    return (
        <>
            <Navbar />
            <Breadcrumb title="Pricing" />
            <Price />
            <Testimonials />
            <Offer />
            <Footer />
        </>
    )
}

export default PricePage;