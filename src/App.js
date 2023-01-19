import './App.css';
import { HashRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';
import Homepage from './components/homepage';
import Mens from './components/mens';

function App() {



  return (
    <Router basename="/">
      <div className="App">
        <Header />
      <Routes>
        <Route
          exact path="/"
          element={
            <Homepage />
          }
        />
        <Route
          exact path="mens"
          element={
            <Mens />
          }
        />
      
    
    </Routes>
    <Footer />
    </div>
</Router>
  );
}
export default App;
