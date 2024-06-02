
import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Home/Footer'

function App() {

  return (
     <div>
      <Nav></Nav>
        <Outlet></Outlet>
        <Footer></Footer>
     </div>
  )
}

export default App
