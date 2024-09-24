import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./layuot/Layout.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Layout/>}>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
