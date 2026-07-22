import Login from "./paginas/Login"
import NetFlox from "./paginas/NetFlox"
import {BrowserRouter, Routes, Route} from "react-router-dom"
export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/net" element={<NetFlox/>} />
        </Routes>
    </BrowserRouter>
  )
}
