
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Signin } from "./components/Pages/Signin";
import { Guide} from "./components/Pages/Guide";
import { Coding } from "./components/Pages/Coding";
function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/Signin" element={<Signin/>} />
           <Route path="/Guide" element={<Guide/>} />
           <Route path="/Coding" element={<Coding/>} />
         </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

