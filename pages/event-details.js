import { Breadcrumb, Footer, Navbar } from "../components";
import { Category1, EventDetails } from "../sections";

function EventDetailsPage() {
    return (
        <>
            <Navbar />
            <Breadcrumb title="Event Details" />
            <EventDetails />
            <Category1 />
            <Footer />
        </>
    )
}

export default EventDetailsPage;