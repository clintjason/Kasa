
import './App.css';
import { Routes, Route } from "react-router-dom";
// import Components
import Footer from './components/Footer';
import Header from './components/Header';
// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Housing from './pages/Housing';
import housingData from './model/logements.json';
import Error404 from './pages/Error/404';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home pageTitle="Kasa - Home" housingData={housingData} />}/>
          <Route path="*" element={<Error404 />}/>
          <Route exact path="/about" element={<About pageTitle="Kasa - About" />}/>
          <Route exact path="/housing/:id" element={<Housing pageTitle="Kasa - Housing" housingData={housingData}/>}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
