import '../styles/App.css'
import {BrowserRouter,Routes,Route}from'react-router-dom'
import { Footer } from '../components/Footer/Footer'
import { Navbare } from '../components/Navbar/Navbar'
import { Homepage } from './Homepage'
import { Financiere } from '../components/Aide-financiere/financiere'

function App() {
    return (
<div>
  <Navbare/>
<BrowserRouter>

<Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/Financiere" element={<Financiere />} />

</Routes>
<Footer/>
</BrowserRouter>
</div>
  )
}

export default App
