export default function Sidebar() {
    return (
        <aside>
            <nav>
                <div className="w-36 pb-3">
                    <a href="/">
                        <img src="/assets/icons/logo.png" alt="Logo Power Chord" />
                    </a>
                </div>
                <ul className="pl-1.5">
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
        </aside>
    )
}
