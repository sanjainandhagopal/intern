import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './samplepage/home'
import Layout from './Layout'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
