
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Layout from './layouts/Layout';
import LinkTree from "./pages/LinkTree";
import OficinaAutoEstima from "./pages/oficinaAutoEstima";

function App() {

  return (
    <Router>
        <Routes>
        <Route path="/"  element = { <LinkTree />} >
              {/* <Route path="nova" element = {<Nova />}/> */}
          </Route>
          <Route path="oficinaAutoEstima"  element = { <OficinaAutoEstima />} >
            <Route index element = {<Home />}/>
              {/* <Route path="nova" element = {<Nova />}/> */}
          </Route>
        </Routes>
    </Router>
  )
}

export default App
