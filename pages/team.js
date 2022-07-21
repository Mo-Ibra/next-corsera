import { Breadcrumb, Footer, Navbar } from "../components";
import { Offer, Team, Testimonials } from "../sections";

function PricePage() {
    return (
        <>
            <Navbar />
            <Breadcrumb title="Team" />
            <Team />
            <Testimonials />
            <Offer />
            <Footer />
        </>
    )
}

export default PricePage;