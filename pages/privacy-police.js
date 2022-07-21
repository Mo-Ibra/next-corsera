import { Breadcrumb, Footer, Navbar } from "../components";
import { PrivacyPolice } from "../sections";

function PrivacyPolicePage() {
    return (
        <>
            <Navbar />
            <Breadcrumb title="Privacy & Police" />
            <PrivacyPolice />
            <Footer />
        </>
    )
}

export default PrivacyPolicePage;