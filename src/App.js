import logo from '../src/image/Logo.svg';
import './App.css';
import Main from './components/Main';

function App() {
  return (
    <>
      <header>
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
      </header>
      <Main />
      <footer>
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
      </footer>
    </>
  );
}

export default App;
