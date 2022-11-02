import { useEffect, useState } from "react";
import { Card, Badge, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { obtenerProductoAPI } from "../../helpers/queries";

const DetalleProducto = () => {

    const { id } = useParams();
    const [producto, setProductos] = useState({});

    useEffect(()=>{
        obtenerProductoAPI(id).then((respuesta)=>{
            if(respuesta.status===200){
                setProductos(respuesta.dato)
            }
        })
    },[])

    return (
        <Container className="my-4">
            <Card className="container border rounded my-3 flex-row">
                <Card.Img
                    className="w-25"
                    variant="start"
                    src={producto.imagen}
                />
                <Card.Body>
                    <div>
                        <Card.Title>{producto.nombreProducto}</Card.Title>
                        <hr />
                        <Badge bg="success">Success</Badge>
                        <Card.Text className="mt-3 fw-bold">{producto.precio}</Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default DetalleProducto;