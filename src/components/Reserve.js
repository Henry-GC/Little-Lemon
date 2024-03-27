

const Reserve = () => {
    return(
        <>
            <div>
                <h1>Reserva una mesa</h1>
                <form>
                    <label for="nombre">Nombre:</label>
                    <input type="text" name="nombre" id="nombre"/>
                    <label for="apellido">Apellido:</label>
                    <input type="text" name="apellido" id="apellido"/>
                    <div><label for="fecha">Fecha:</label>
                    <input type="number" name="fecha" id="fecha"/>
                    <label for="hora">Hora:</label>
                    <input type="number" name="hora" id="hora"/></div>
                    <label for="asientos">N° Asientos</label>
                    <input type="" name="nombre" id="nombre"/>
                    <label>Preferencias</label>
                    <select>
                        <option></option>
                        <option>Puerta de Entrada</option>
                        <option>Cuarto de Baño</option>
                    </select>
                </form>
            </div>
        </>
    )
}

export default Reserve