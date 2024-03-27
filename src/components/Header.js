import { Link } from "react-router-dom"
import logo from "../image/Logo.svg"

const Header = () =>{
    return (
        <>
            <header>
                <div className='header'>
                    <img src={logo}/>
                    <nav>
                        <ul>
                            <li><Link to="/">INICIO</Link></li>
                            <li><a href="#">MENU</a></li>
                            <li><Link to="/reservar">RESERVAR</Link></li>
                            <li><a href="#">NOSOTROS</a></li>
                            <li><a href="#">LOGIN</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}
export default Header