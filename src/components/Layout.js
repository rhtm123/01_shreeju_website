import Footer from "./Footer"
// import Header from "./Header"
import Navbar from "./Navbar"

function Layout({children}) {

    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout