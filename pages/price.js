import { Footer, Navbar } from "../components";
import { Offer, Price, Testimonials } from "../sections";

function Event() {
    return (
        <>
            <Navbar />
            <Price />
            <Testimonials />
            <Offer />
            <Footer />
        </>
    )
}

export default Event;