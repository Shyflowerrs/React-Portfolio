import logo from './logo.svg';
import Main from './Components/Main'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
