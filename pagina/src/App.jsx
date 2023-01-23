import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Error404 from "./components/helpers/Error404"
import Crear from "./components/productos/Crear"
import Editar from './components/productos/Editar'
import Listado from './components/productos/Listado'

const router = createBrowserRouter([
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
    path: '/editarProducto',
    element: <Editar />,
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