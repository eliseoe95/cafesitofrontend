import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 
  const [usuarioLogeado, setUsurioLogeado] = useState([]);

  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <NavLink className={"nav-item nav-link"} onClick={handleShow}>
        Ingresar
      </NavLink>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ingresar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="eliseoespidola1@gmail.com"
                {...register("email", {
                  required: "El email es obligatorio",
                  minLength: {
                    value: 8,
                    message: "La cantidad minima debe ser 8",
                  },
                  maxLength: {
                    value: 30,
                    message: "La cantidad maxima debe ser de 30",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="**"
                {...register("contrasenia", {
                  required: "El contraseña es obligatorio",
                  minLength: {
                    value: 8,
                    message: "La cantidad minima debe ser 8",
                  },
                  maxLength: {
                    value: 15,
                    message: "La cantidad maxima debe ser de 15",
                  },
                })}
              />
            </Form.Group>
            <Form.Text className="text-danger">
              {errors.contrasenia?.message}
            </Form.Text>
            <hr></hr>
            <div className="text-center">
              <Button variant="danger" type="submit">
                Ingresar
              </Button>
            </div>
          </Form>
        </Modal.Body>
        <Button variant="dark" onClick={handleClose}>
          Cerrar
        </Button>
      </Modal>
    </>
  );
};

export default Login;