import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Results from './pages/Results';
import Main from './Main';

function App() {
  return (
    <Router>
      <div className="app">

        <Routes>
        
          <Route path="/Results" element={<Results/>} />
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
