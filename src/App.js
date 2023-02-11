import './App.css';
import { HashRouter as Router, Routes, Route} from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';
import Homepage from './components/homepage';
import Mens from './components/mens';
import Womens from './components/womens';
import BrandsPage from './components/brandsPage';
import Contact from './components/contact';
import AboutOtherwides from './components/aboutPage';

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
          <Route
          exact path="womens"
          element={
            <Womens />
          }
        />
        <Route
          exact path="brands"
          element={
            <BrandsPage />
          }
        />
        <Route
          exact path="contact"
          element={
            <Contact />
          }
        />
        <Route
          exact path="about_otherwides"
          element={
            <AboutOtherwides />
          }
        />
      
    
    </Routes>
    <Footer />
    </div>
</Router>
  );
}
export default App;
