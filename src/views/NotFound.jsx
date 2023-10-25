import { Link } from "react-router-dom"
const NotFound = () => {
    return (
        <>
            <img src="https://digitalid.cl/wp-content/uploads/2020/12/NoFound.jpg" alt="" />
            <Link to="/"><button>Volver al home</button></Link>
        </>
    )
}

export default NotFound