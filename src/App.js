import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import SalesManager from './components/SalesManager';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';



function App() {
  return <>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  </>;
}
const Home = () => (
  <>
    <Header/>
   <SalesManager/>
   <Footer/>
  
  </>
);
export default App;
