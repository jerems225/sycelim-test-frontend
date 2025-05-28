import { Route, Routes } from "react-router-dom"
// import ProtectedRoute from "./context/ProtectedRoute"
import AppLayout from "./layouts/AppLayout"
import './App.css'
import Home from "./pages/Home"
import Login from "./components/Auth/Login/Login"
import Register from "./components/Auth/signup/Register"

const App = () => {

  return (
      <Routes>
        {/* Routes avec Header/Footer */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        {/* Routes sans Header/Footer */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
  )
}

export default App
