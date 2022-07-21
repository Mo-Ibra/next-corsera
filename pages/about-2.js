import { Breadcrumb, Footer, Navbar } from "../components";
import { About1, About2, Offer, Subscripe, Team, Testimonials, WhyUs1, WhyUs2, WhyUs3 } from "../sections";

function About() {
    return (
        <>
            <Navbar />
            <Breadcrumb title="About Us" />
            <About2 />
            <Offer />
            {/* Awards */}
            <Team />
            <WhyUs2 />
            <Subscripe />
            <Testimonials />
            <Footer />
        </>
    )
}

export default About;