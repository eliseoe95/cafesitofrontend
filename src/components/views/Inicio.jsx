import CardProducto from "./producto/CardProducto";
import {Row} from 'react-bootstrap';

const Inicio = () => {
    return (
        <div>
            <h1 className="display-4 text-center">Bienvenidos</h1>
            <hr/>
            <Row>
                <CardProducto/>
            </Row>
        </div>
    );
};

export default Inicio;