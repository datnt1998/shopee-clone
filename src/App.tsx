import { ToastContainer } from 'react-toastify'
import useRouteElement from './router/useRouteElement'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const routeElement = useRouteElement()

  return (
    <div className='App'>
      {routeElement}
      <ToastContainer />
    </div>
  )
}

export default App
