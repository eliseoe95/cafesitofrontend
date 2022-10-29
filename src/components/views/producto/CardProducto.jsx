import { Col, Card, Button } from "react-bootstrap";
import {Link} from 'react-router-dom';

const CardProducto = () => {
    return (
        <>
            <Col sm={4} md={4} lg={3} className="my-3">
                <Card>
                    <div>
                    <Card.Img
                        className="w-100"
                        variant="top"
                        src="https://images.pexels.com/photos/887853/pexels-photo-887853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        />
                    </div>
                    <Card.Body>
                        <Card.Title className="text-center">Brownie</Card.Title>
                        <Card.Text className="fw-bold">Precio: $400</Card.Text>
                        <hr />
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <Button variant="danger" as={Link} to='/administrar/detalle'>Ver mas</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default CardProducto;