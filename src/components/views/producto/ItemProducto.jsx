import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom'
import "bootstrap-icons/font/bootstrap-icons.css";
import { borrarProductoAPI, consultarAPI } from "../../helpers/queries";
import Swal from 'sweetalert2';

const ItemProducto = ({producto, setProductos}) => {
    
    const borrarProducto = ()=>{
        Swal.fire({
            title: 'Estas seguro que deseas borrar este producto?',
            text: "No podras recuperar el producto borrado",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, borrar'
          }).then((result) => {
            if (result.isConfirmed) {
                borrarProductoAPI(producto._id).then((respuesta)=>{
                    if(respuesta.status===200){
                        Swal.fire('Producto eliminado', 'El producto fue correctamente eliminado', 'success');
                        consultarAPI().then((respuesta)=>{
                            setProductos(respuesta);
                        })
                    }else{
                        Swal.fire('Ocurrio un error', 'Intente esta operacion en unos minutos', 'error');
                    }
                })
            }
          })
    }
    return (
        <>
            <tr>
                <td>{producto._id}</td>
                <td>{producto.nombreProducto}</td>
                <td>{producto.precio}</td>
                <td>{producto.imagen}</td>
                <td>{producto.categoria}</td>
                <td className="text-center">
                    <Link className="btn btn-outline-warning me-1" to={`/administrar/editar/${producto._id}`}>
                        <i className="bi bi-arrow-clockwise text-warning"></i>
                    </Link>
                    <Button variant="none" onClick={borrarProducto}>
                        <i className="bi bi-x-lg text-danger"></i>
                    </Button>
                </td>
            </tr>
        </>
    );
};

export default ItemProducto;