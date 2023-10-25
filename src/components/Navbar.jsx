import { Link } from "react-router-dom";
import "../assets/css/style.css"

const Navbar = () =>{
    return(
        <div className="navbar">
            <Link to="/"><h1>LOGO</h1></Link>
            <section>
                <Link to="/iniciar-sesion"><button>Iniciar Sesion</button></Link>
                <Link to="/registrarse"><button>Registrarse</button></Link>
                
                
            </section>

        </div>

    )
}
export default Navbar;