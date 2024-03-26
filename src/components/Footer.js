import logo from "../image/Logo.svg"

const Footer = () => {
    return (
        <>
            <div><img src={logo} /></div>
            <div>
                <div>
                    <h3>Navegación</h3>
                    <ul>
                        <li><a>Inicio</a></li>
                        <li><a>Menu</a></li>
                        <li><a>Reservar</a></li>
                        <li><a>Nosotros</a></li>
                        <li><a>Login</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contacto</h3>
                    <ul>
                        <li>Dirección</li>
                        <li>Número</li>
                        <li>E-mail</li>
                    </ul>
                </div>
                <div>
                    <h3>Redes Sociales</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Tik Tok</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Footer