import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import routeLoggedIn from './routes/route-logged-in'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={routeLoggedIn()}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
