import logo from "../image/Logo.svg"

const Header = () => {
    return (
        <>
            <img src={logo}/>
            <nav>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservar</a></li>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </nav>
        </>
    )
}
export default Header