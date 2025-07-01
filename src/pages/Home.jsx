import Sidebar from "../components/Sidebar"
import Library from "../components/Library"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Home() {
    return (
        <>
            <Sidebar />
            <Library />
            <Header />
            <Footer />

            <main>
               <h1>main</h1> 
            </main>
        </>
    )
}
