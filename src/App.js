import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Routes from './router';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



function App() {

  return (
      <div className="App">
        <Router>
          <Header />
          {/* <Routes /> */}
          <Footer />

        </Router>

      </div>
  );
}

export default App;
