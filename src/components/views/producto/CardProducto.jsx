import { Col, Card, Button } from "react-bootstrap";
import {Link} from 'react-router-dom';

const CardProducto = ({producto}) => {
    return (
        <>
            <Col sm={4} md={4} lg={3} className="my-3">
                <Card>
                    <div>
                    <Card.Img
                        className="w-100"
                        variant="top"
                        src={producto.imagen}
                        />
                    </div>
                    <Card.Body>
                        <Card.Title className="text-center">{producto.nombre}</Card.Title>
                        <Card.Text className="fw-bold">{producto.precio}</Card.Text>
                        <hr />
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <Button variant="danger" as={Link} to={`/administrar/detalle/${producto._id}`}>Ver mas</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default CardProducto;