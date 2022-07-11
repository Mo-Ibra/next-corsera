import { Footer, Navbar } from "../components";
import { Category1, EventDetails } from "../sections";

function EventDetailsPage() {
    return (
        <>
            <Navbar />
            <EventDetails />
            <Category1 />
            <Footer />
        </>
    )
}

export default EventDetailsPage;