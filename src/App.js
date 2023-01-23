
import Section from './Components/Section/index.js'
import Navbar from './Components/Navbar/index';
import Header from './Components/Header/index';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {
  return (
    <Router>
      <Navbar />
      <Header />
      <Routes>
        {/* <Route path="/React-Portfolio" element={<Section/>}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
