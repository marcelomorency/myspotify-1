import { Link } from "react-router-dom";


export default function Header() {
    return(
        <header className="Header-main">
            <nav className="navBar">
            <div className="containerNav"> 
                <div className="LogoClass">
                <img className="logo" src="/logo-spotify-256.png" alt="" />
                </div>
            </div>
            <div className="ContainerLinks"> 
                <ul className="UlAll">
                <li className="liHome">
                    <Link to="/" className="HomePage">Home</Link>
                </li>
                <li className="liFaq">
                    <Link to="/faq" className="FaqPage">FAQ</Link>
                </li>
                <li>|</li>
                <li className="liCadastro">
                    <Link to="/users/signup" className="Cadastro">Cadastrar-se</Link>
                </li>
                </ul>
            </div>
            </nav>
        </header>
    );
}