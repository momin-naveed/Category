import './App.css';
import Category from './components/Category';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Category />} />
          <Route path="/edit-category/:category" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
