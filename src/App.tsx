import useRouteElement from './router/useRouteElement'

function App() {
  const routeElement = useRouteElement()

  return <div className='App'>{routeElement}</div>
}

export default App
