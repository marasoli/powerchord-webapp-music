export default function Sidebar() {
    return (
        <aside className="w-xs h-full">
            <nav className="bg-[#121212e0] text-[#b3b3b3] rounded-lg p-5 mb-3.5">
                <div className="w-28 pb-2.5">
                    <a href="/">
                        <img src="assets/icons/logo.png" alt="Logo Power Chord" />
                    </a>
                </div>
                <ul className="pl-1">
                    <li className="p-0.5 hover:text-white">
                        <a href="/">
                            <i className="fa-solid fa-house pr-2.5"></i>
                            <span>Início</span>
                        </a>
                    </li>
                    <li className="p-0.5 hover:text-white">
                        <a href="">
                            <i className="fa-solid fa-compass pr-2.5"></i>
                            <span>Explorar</span>
                        </a>
                    </li>
                    <li className="p-0.5 hover:text-white">
                        <a href="">
                            <i className="fa-solid fa-newspaper pr-2.5"></i>
                            <span>Novidades</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="flex flex-col bg-[#121212e0] text-[#b3b3b3] rounded-lg p-5">
                <div className="flex justify-between justify-items-center mb-2.5">
                    <a href="" className="hover:text-white">
                        <i className="fa-solid fa-book-skull pr-2.5"></i>
                        <span>Sua biblioteca</span>
                    </a>
                    <button className="fa-solid fa-plus hover:text-white"></button>
                </div>

                <section className="">
                    <div className="bg-[#242424] text-sm rounded-lg p-3.5 ">
                        <span className="flex text-white text-base pb-1.5">Que tal curtir algo novo?</span>
                        <span className="flex text-sm pb-2.5">Crie uma playlist e siga sua radio favorita 🤟</span>
                        <div className="flex justify-between text-[#121212] m-1.5 cursor-pointer">
                            <button className="bg-amber-50 p-2 rounded-2xl hover:text-[#6b0000] hover:scale-[1.04]">Criar Playlist</button>
                            <button className="bg-amber-50 p-2 rounded-2xl hover:text-[#6b0000] hover:scale-[1.04]">Seguir Radio</button>
                        </div>
                    </div>
                    
                    <div className="">
                        <div className="m-1.5 text-xs">
                            <a href="" className="leading-[2.0]">Segurança e Privacidade</a><br />
                            <a href="" className="pr-2.5 leading-[2.0]">Acessibilidade</a>
                            <a href="" className="pr-2.5 leading-[2.0]">Sobre o PowerChord</a>
                        </div>
                        <div className="m-1.5 text-white">
                            <a href="" className="text-sm hover:underline">Cookies</a>
                        </div>
                    </div>

                    <div class="library-languages">
                        <button className="text-white border-2 border-solid rounded-2xl p-1.5 pl-2.5 pr-2.5">
                            <span class="fa-solid fa-earth-americas pr-2.5"></span>
                            <span>Português do Brasil</span>
                        </button>
                    </div>
                </section>
            </div>
        </aside>
    )
}
