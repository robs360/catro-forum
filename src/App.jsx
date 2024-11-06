
import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Home/Footer'

function App() {
  
  return (
     <div className='w-full'>
      <Nav></Nav>
        <Outlet></Outlet>
        <Footer></Footer>
     </div>
  )
}

export default App
