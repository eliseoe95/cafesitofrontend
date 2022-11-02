import CardProducto from "./producto/CardProducto";
import { Row } from 'react-bootstrap';
import { useEffect, useState } from "react";
import { consultarAPI } from "../helpers/queries";

const Inicio = () => {
    const [verProductos, setVerProductos] = useState([]);
    
    useEffect(()=>{
        consultarAPI().then((respuesta)=>{
            setVerProductos(respuesta)
        })
    },[])

    return (
        <div>
            <h1 className="display-4 text-center">Bienvenidos</h1>
            <hr/>
            <Row>
                {
                    verProductos.map((producto)=>{return <CardProducto key={producto._id} producto={producto} />})
                }
            </Row>
        </div>
    );
};

export default Inicio;