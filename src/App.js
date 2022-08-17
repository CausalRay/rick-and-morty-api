import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Filter from './Filter';
import Main from './Main';

function App() {
  return (
    <Router>
      <div className="app">

        <Routes>
        
          <Route path=":id" element={<Filter/>} />
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
