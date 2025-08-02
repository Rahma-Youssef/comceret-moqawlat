
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import Aboutus from './Components/Aboutus/Aboutus'
import Layout from './Components/Layout/Layout'
import Ourwork from './Components/Ourwork/Ourwork'

function App() {


  return (
    <>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/ourwork" element={<Ourwork />} />
        </Route>

      </Routes>

    </>
  )
}

export default App
