import { Button, ListGroup  } from "react-bootstrap";
const ItemTarea = () => {
    return (
            <ListGroup.Item className="bg-dark-subtle text-dark fs-5 fw-lighter d-flex justify-content-between">Programar el boton de crear <Button variant="outline-danger" className="btn-borrar">Borrar</Button></ListGroup.Item>
    );
};

export default ItemTarea;