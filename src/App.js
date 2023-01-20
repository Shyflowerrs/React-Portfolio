
import Main from './Components/Main'
import Navbar from './Components/Navbar/index';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
