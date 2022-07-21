import { Breadcrumb, Footer, Navbar } from "../components";
import { Category1, Event1 } from "../sections";

function EventPage() {
    return (
        <>
            <Navbar />
            <Breadcrumb title="Events 1" />
            <Event1 />
            <Category1 />
            <Footer />
        </>
    )
}

export default EventPage;