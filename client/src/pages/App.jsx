import '../styles/App.css'
import {BrowserRouter,Routes,Route}from'react-router-dom'
import { Footer } from '../components/Footer/Footer'
import { Navbare } from '../components/Navbar/Navbar'
import { Homepage } from './Homepage'

function App() {
    return (
<div>
  <Navbare/>
<BrowserRouter>

<Routes>
          <Route path="/" element={<Homepage/>} />
          {/* <Route path="/component2" element={<Component2 />} />
          <Route path="/component3" element={<Component3 />} />
          <Route path="/component4" element={<Component4 />} /> */}
</Routes>
<Footer/>
</BrowserRouter>
</div>
  )
}

export default App
