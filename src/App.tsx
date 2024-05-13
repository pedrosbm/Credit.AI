import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import About from "./components/About";

const App = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" Component={Main}/>
                <Route path="/about" Component={About}/>
            </Routes>
        </Router>
    )
}

export default App