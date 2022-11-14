import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';

function App() {
  return (
    <div nameClass="App">
      <div class="container py-4">
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Router>
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;