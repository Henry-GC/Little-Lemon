import logo from "../image/Logo.svg"

const Header = () =>{
    return (
        <>
            <header>
                <div className='header'>
                    <img src={logo}/>
                    <nav>
                        <ul>
                            <li><a href="#">INICIO</a></li>
                            <li><a href="#">MENU</a></li>
                            <li><a href="#">RESERVAR</a></li>
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