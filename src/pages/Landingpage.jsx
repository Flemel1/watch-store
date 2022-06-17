import Banner from "../components/Banner";
import Category from "../components/Category";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import NewArrival from "../components/NewArrival";

const Landingpage = () => {
    return (
        <>
            <Banner />
            <main>
                <NewArrival />
                <Category />
            </main>
            <CTA />
            <Footer />
        </>
    )
};

export default Landingpage;
