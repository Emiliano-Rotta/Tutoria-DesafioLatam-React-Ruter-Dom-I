import { Link } from "react-router-dom"
import "../assets/css/style.css"

const IniciarSesion = () => {
    return (
        <form>
            <input type="text" placeholder="Escribir mail" />
            <input type="text" placeholder="Escribir contraseña" />
            <button>Enviar</button>
            <Link to="/registrarse"><button>Registrar</button></Link>
        </form>
    )
}

export default IniciarSesion