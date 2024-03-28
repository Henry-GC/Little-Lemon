import { useState } from "react"
import tarjeta from "../image/creditcard.svg"

const BookingForm = ({availableTimes,updatTimes}) => {

    const [nombre,setNombre] = useState("");
    const [fecha,setFecha] = useState("");
    const [hora,setHora] = useState("");
    const [asientos,setAsientos] = useState("");
    const [pref,setPref] = useState("");

    const changeHandler = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'nombre':
                setNombre(value);
                break;
            case 'fecha':
                setFecha(value);
                break;
            case 'hora':
                setHora(value);
                break;
            case 'asientos':
                setAsientos(value);
                break;
            case 'pref':
                setPref(value);
                break;
            default:
                break;
        }
    };

    return(
        <>
            <form>
                    <div className="data-colum">
                        <label htmlFor="nombre">Nombre</label>
                        <input onChange={changeHandler} type="text" name="nombre" id="nombre" value={nombre}/>
                    </div>
                    <div>
                        <div className="data-colum">
                            <label htmlFor="fecha">Fecha</label>
                            <input onChange={changeHandler} type="date" name="fecha" id="fecha" value={fecha}/>
                        </div>
                        <div className="data-colum">
                            <label htmlFor="hora">Hora</label>
                            <select onChange={changeHandler} name="hora" id="hora" value={hora}>
                                {availableTimes.map((time)=>(
                                    <option>{time}</option>
                                ))}
                            </select>
                        </div>
                        <div className="data-colum" id="asientos-container">
                            <label htmlFor="asientos">Asientos</label>
                            <input onChange={changeHandler} type="number" id="asientos" name="asientos" min="1" max="10" placeholder="1" value={asientos}/>
                        </div>
                        <div className="data-colum">
                            <label>Preferencias</label>
                            <select onChange={changeHandler} id="pref" name="pref" value={pref}>
                                <option></option>
                                <option>Puerta de Entrada</option>
                                <option>Cuarto de Baño</option>
                            </select>
                        </div>
                    </div>
                    <div className="data-colum">
                        <label htmlFor="ci">CI / Pasaporte:</label>
                        <input type="number" id="ci" name="ci"/>
                    </div>
                    <div className="data-colum">
                        <label htmlFor="tarjeta">N° Tarjeta</label>
                        <input type="number" id="tarjeta" name="tarjeta"/>
                    </div>
                    <div>
                        <div className="data-colum" id="cvv-container">
                            <label htmlFor="cvv">CVV</label>
                            <input type="number" id="cvv" name="cvv"/>
                        </div>
                        <div className="data-colum" id="tarj">
                            <span>3 Digitos de la parte posterior</span>
                            <figure><img src={tarjeta} width="100%"/></figure>
                        </div>
                    </div>
                    <div className="data-colum">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input type="email" id="email" name="email"/>
                    </div>
                    <button type="submit">ENVIAR</button>
                </form>
        </>
    )
}

export default BookingForm