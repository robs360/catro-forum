
import { Outlet } from 'react-router-dom'
import Nav from './Nav'

function App() {

  return (
     <div>
      <Nav></Nav>
        <Outlet></Outlet>
     </div>
  )
}

export default App
