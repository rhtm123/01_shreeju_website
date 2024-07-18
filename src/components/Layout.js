import Footer from "./Footer"
// import Header from "./Header"
import Navbar from "./Navbar"
import WhatsApp from "./WhatsApp"

function Layout({children}) {

    return (
        <div>
            <Navbar />
            <WhatsApp />
            {children}
            <Footer />
        </div>
    )
}

export default Layout