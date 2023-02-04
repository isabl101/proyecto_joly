import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Error404 from "./components/helpers/Error404"
import Crear from "./components/productos/Crear"
import Editar from './components/productos/Editar'
import Listado from './components/productos/Listado'            
import Inicio from './components/home/Inicio'
import ListarCliente from './components/clientes/ListarCliente'
import CrearCliente from './components/clientes/CrearCliente'
import EditarCliente from './components/clientes/EditarCliente'
import ListarProveedor from './components/proveedor/ListarProveedor'
import CrearProveedor from './components/proveedor/CrearProveedor'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Inicio />,
    errorElement:<Error404 />
  },

  {
    path:'/listadoProducto',
    element:<Listado />,
    errorElement: <Error404 />
  },
  
  {
    path: '/crearProducto',
    element: <Crear />,
    errorElement: <Error404 />
  },
  
  {
    path: '/editarProducto/:id',
    element: <Editar />,
    errorElement: <Error404 />
  },
  
  {
    path: '/listadoCliente',
    element: <ListarCliente />,
    errorElement: <Error404 />
  },
  
  {
    path: '/crearCliente',
    element: <CrearCliente />,
    errorElement: <Error404 />
  },
  
  {
    path: '/editarCliente/:id',
    element: <EditarCliente />,
    errorElement: <Error404 />
  },

  {
    path: '/listadoProveedor',
    element: <ListarProveedor />,
    errorElement: <Error404 />
  },

  {
    path: '/crearProveedor',
    element: <CrearProveedor />,
    errorElement: <Error404 />
  }

])

function App() {
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  )
}

export default App