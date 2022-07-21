import { Footer, Navbar } from "../components";
import { About1, Offer, Team, Testimonials, WhyUs3 } from "../sections";

function About() {
    return (
        <>
            {/* <Navbar /> */}
            {/* Breadcrumb */}
            <About1 />
            <Offer />
            {/* Workshop */}
            <WhyUs3 />
            <Team />
            <Testimonials />
            <Footer />
        </>
    )
}

export default About;