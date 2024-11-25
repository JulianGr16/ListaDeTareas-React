import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListaTareas from "./ListaTareas";

const FormularioTareas = () => {
  return (
    <section className="container-fluid">
      <Form className="">
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="escribe alguna tarea..." className="me-1"/>
          <Button variant="primary" type="submit">
          Crear
        </Button>
        </Form.Group>
      </Form>
      <ListaTareas></ListaTareas>
    </section>
  );
};

export default FormularioTareas;
