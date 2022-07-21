import { Breadcrumb, Footer, Navbar } from "../components";
import { Category3, Event2 } from "../sections";

function EventPage() {
    return (
        <>
            <Navbar />
            <Breadcrumb title="Events 2" />
            <Event2 />
            <Category3 />
            <Footer />
        </>
    )
}

export default EventPage;