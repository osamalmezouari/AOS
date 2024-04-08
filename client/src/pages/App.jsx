import '../styles/App.css'
import {BrowserRouter,Routes,Route}from'react-router-dom'
import { Footer } from '../components/Footer/Footer'
import { Navbare } from '../components/Navbar/Navbar'

function App() {
    return (
<div>
  <Navbare/>
<BrowserRouter>

<Routes>
  <Route>

  </Route>
</Routes>
<Footer/>
</BrowserRouter>
</div>
  )
}

export default App
