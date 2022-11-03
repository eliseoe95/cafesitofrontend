import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { consultarUsuarioAPI } from "../../helpers/queries";
import Swal from "sweetalert2";

const Login = ({setUsuarioLogueado}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    consultarUsuarioAPI().then((usuarios)=>{
      const usuarioIngresado = usuarios.find((usuario)=> usuario.email === data.email)
      console.log(usuarioIngresado);
      if(usuarioIngresado){
        if(data.contrasenia===usuarioIngresado.contrasenia){
          localStorage.setItem('usuarioLogueado', JSON.stringify(usuarioIngresado))
          setUsuarioLogueado(usuarioIngresado);
          reset();
          handleClose();
        }
      }else{
        Swal.fire(
          'El usuario ingresado no es correcto',
          'Los datos ingresados no son validos',
          'danger'
        )
      }
    })
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