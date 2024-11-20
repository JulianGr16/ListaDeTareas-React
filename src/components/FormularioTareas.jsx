import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FormularioTareas = () => {
  return (
    <section className="container-fluid">
      <Form className="">
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="escribe alguna tarea..." className="me-1"/>
          <Button variant="primary" type="submit">
          Enviar
        </Button>
        </Form.Group>
      </Form>
    </section>
  );
};

export default FormularioTareas;
