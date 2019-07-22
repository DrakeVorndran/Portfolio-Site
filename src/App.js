import React from 'react';
import './css/App.css';
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'

const pages = [Home, Projects, Contact]

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        {pages.map(Page => <div key={Page.name} id={Page.name.toLowerCase()}><Page /></div>)}
      </div>
    </div>
  );
}

export default App;
