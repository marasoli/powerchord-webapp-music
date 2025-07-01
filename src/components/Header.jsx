export default function Header() {
    return (
        <header className="flex justify-between items-center">
            <div>
                <button className="fa-solid fa-chevron-left bg-[#6B0000] border-2 border-white rounded-sm text-white p-1 w-7 mr-3 hover:"></button>
                <button className="fa-solid fa-chevron-right bg-[#6B0000] border-2 border-white rounded-sm text-white p-1 w-7"></button>
            </div>

            <div className="flex items-center relative w-80">
                <input type="text" maxlength="800" placeholder="O que você quer ouvir?" className="border-2 border-white rounded-sm p-0.5 pr-7.5 text-white w-full outline-none"/>
                <i className="fa-solid fa-magnifying-glass absolute right-2 text-white"></i>
            </div>

            <div className="text-sm">
                <button className="bg-white border-2 border-[#6B0000] rounded-sm text-[#6B0000] p-0.5 mr-3 hover:scale-[1.04]">Inscreva-se</button>
                <button className="bg-[#6B0000] border-2 border-white rounded-sm text-white p-0.5 hover:scale-[1.04]">Entrar</button>
            </div>
        </header>
    )
}
