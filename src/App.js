
import Section from './Components/Section/index.js'
import Navbar from './Components/Navbar/index';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Section/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
