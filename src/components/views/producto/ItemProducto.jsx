import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom'
import "bootstrap-icons/font/bootstrap-icons.css";

const ItemProducto = ({producto}) => {
    return (
        <>
            <tr>
                <td>{producto.id}</td>
                <td>{producto.nombreProducto}</td>
                <td>{producto.precio}</td>
                <td>{producto.imagen}</td>
                <td>{producto.categoria}</td>
                <td className="text-center">
                    <Link className="btn btn-outline-warning me-1" to={`/administrar/editar/:id`}>
                        <i className="bi bi-arrow-clockwise text-warning"></i>
                    </Link>
                    <Button variant="none">
                        <i className="bi bi-x-lg text-danger"></i>
                    </Button>
                </td>
            </tr>
        </>
    );
};

export default ItemProducto;