import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
          <h1>hello world</h1>
          <Router>
            <Navbar />
              <Routes>
                 <Route path="/"exact component={Home} />
              </Routes>
           <Footer />
           </Router>
    </div>
  );
}

export default App;
