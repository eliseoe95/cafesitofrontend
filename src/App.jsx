import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Administrador from './components/views/Administrador';
import Error404 from './components/views/Error404';
import Inicio from './components/views/Inicio';
import Menu from './components/common/Menu';
import Footer from './components/common/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import DetalleProducto from './components/views/producto/DetalleProducto';
import CrearProducto from './components/views/producto/CrearProducto';
import EditarProducto from './components/views/producto/EditarProducto';
import './app.css';
import Login from './components/views/usuario/Login';
import Registrar from './components/views/usuario/Registrar';

function App() {
  return (
    //Administrar las rutas
  <BrowserRouter>
  <Menu></Menu>
    <Routes>
      <Route exact path='/' element={<Inicio></Inicio>}></Route>
      <Route exact path='/administrar' element={<Administrador></Administrador>}></Route>
      <Route exact path='*' element={<Error404></Error404>}></Route>
      <Route exact path='/administrar/detalle/:id' element={<DetalleProducto></DetalleProducto>}/>
      <Route exact path='/administrar/crear' element={<CrearProducto></CrearProducto>} />
      <Route exact path='/administrar/editar/:id' element={<EditarProducto/>} />
      <Route exact path='/login' element={<Login></Login>}></Route>
      <Route exact path='/registrar' element={<Registrar></Registrar>}></Route>
    </Routes>
    <Footer></Footer>
  </BrowserRouter>
  
  );
}

export default App;
