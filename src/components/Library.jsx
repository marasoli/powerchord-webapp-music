export default function library() {
    return (
        <div className="library flex flex-col justify-between">
            <div>
                <div className="flex justify-between p-2">
                    <a href="" className="hover:text-white">
                        <i className="fa-solid fa-book-skull pr-2.5"></i>
                        <span>Sua biblioteca</span>
                    </a>
                    <button className="fa-solid fa-plus hover:text-white"></button>
                </div>
                <div className="flex flex-col bg-[#242424] rounded-xl p-3.5">
                    <span className="text-white pb-1.5">Que tal curtir algo novo?</span>
                    <span className="text-sm pb-3">Crie uma playlist e siga sua radio favorita 🤟</span>
                    <div className="flex justify-between text-[#242424] text-sm">
                        <button className="bg-amber-50 rounded-xl p-2 hover:text-[#6b0000] hover:scale-[1.04]">Criar Playlist</button>
                        <button className="bg-amber-50 rounded-xl p-2 hover:text-[#6b0000] hover:scale-[1.04]">Seguir Radio</button>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <div className="flex flex-col text-sm m-3">
                        <a href="" className="">Segurança e Privacidade</a>
                        <a href="" className="">Acessibilidade</a>
                        <a href="" className="">Sobre o PowerChord</a>
                    </div>
                    <div className="text-white hover:underline m-3">
                        <a href="">Cookies</a>
                    </div>
                </div>

                <button className="text-white border-2 rounded-xl p-1.5 mb-2">
                    <i className="fa-solid fa-earth-americas pr-2.5"></i>
                    <span>Português do Brasil</span>
                </button>
            </div>
        </div>
    )
}
