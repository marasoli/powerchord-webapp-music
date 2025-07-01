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
                <div>
                    <h1 className="text-3xl text-white">Boas vindas</h1>
                    <h2 className="text-2xl">Explorar as playlists do momento</h2>
                </div>

                <div className="card-scroll">
                    <section className="card-grid">
                        <a href="" className="card">
                            <div className="bg-amber-900 rounded-lg">
                                <img src="../assets/images/1.jpg" alt=""/>
                                <span>Rock Legends</span>
                            </div>
                        </a>
                        <a href="" className="card">
                            <div className="bg-gray-700 rounded-lg">
                                <img src="../assets/images/2.jpg" alt=""/>
                                <span>Rock Anthems</span>
                            </div>
                        </a>
                        <a href="" className="card">
                            <div className="bg-yellow-600 rounded-lg">
                                <img src="../assets/images/3.jpg" alt=""/>
                                <span>Rock Ballads</span>
                            </div>
                        </a>
                        <a href="" className="card">
                            <div className="bg-blue-800 rounded-lg">
                                <img src="../assets/images/4.jpg" alt=""/>
                                <span>Classic Rock</span>
                            </div>
                        </a>
                        <a href="" className="card">
                            <div className="bg-teal-800 rounded-lg">
                                <img src="../assets/images/5.jpg" alt=""/>
                                <span>Hard Rock</span>
                            </div>
                        </a>
                        <a href="" className="card">
                            <div className="bg-red-800 rounded-lg">
                                <img src="../assets/images/6.jpg" alt=""/>
                                <span>Workout Rock</span>
                            </div>
                        </a>
                        <a href="" className="card">
                            <div className="bg-purple-800 rounded-lg">
                                <img src="../assets/images/7.jpg" alt=""/>
                                <span>Epics Riffs</span>
                            </div>
                        </a>
                        <a href="" className="card">
                            <div className="bg-pink-800 rounded-lg">
                                <img src="../assets/images/8.jpg" alt=""/>
                                <span>Rock & Beer</span>
                            </div>
                        </a>
                        <a href="" className="card">
                            <div className="bg-black rounded-lg">
                                <img src="../assets/images/9.jpg" alt=""/>
                                <span>Gothic</span>
                            </div>
                        </a>
                        <a href="" className="card">
                            <div className="bg-blue-950 rounded-lg">
                                <img src="../assets/images/10.jpg" alt=""/>
                                <span>Post-Hardcore</span>
                            </div>
                        </a>
                        <a href="" className="card">
                            <div className="bg-green-950 rounded-lg">
                                <img src="../assets/images/11.jpg" alt=""/>
                                <span>Adrenaline</span>
                            </div>
                        </a>
                        <a href="" className="card">
                            <div className="bg-gray-500 rounded-lg">
                                <img src="../assets/images/12.jpg" alt=""/>
                                <span>Hard & Heavy</span>
                            </div>
                        </a>
                        <a href="" className="card">
                            <div className="bg-purple-950 rounded-lg">
                                <img src="../assets/images/13.jpg" alt=""/>
                                <span>Midnight Metal</span>
                            </div>
                        </a>
                        <a href="" className="card">
                            <div className="bg-red-950 rounded-lg">
                                <img src="../assets/images/14.jpg" alt=""/>
                                <span>Metal Warriors</span>
                            </div>
                        </a>
                        <a href="" className="card">
                            <div className="bg-pink-950 rounded-lg">
                                <img src="../assets/images/15.jpg" alt=""/>
                                <span>Headbanger's</span>
                            </div>
                        </a>
                    </section>
                </div>
            </main>
        </>
    )
}
