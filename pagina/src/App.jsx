import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Error404 from "./components/helpers/Error404"
import Crear from "./components/productos/Crear"
import Listado from './components/productos/Listado'

const router = createBrowserRouter([
  {
    path:'/listado',
    element:<Listado />,
    errorElement: <Error404 />
  },
  
  {
    path: '/crear',
    element: <Crear />,
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