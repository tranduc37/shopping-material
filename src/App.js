import React, {useContext, useEffect} from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Routes from './routes';
import { AuthContextProvider} from './contexts/authContext';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function App() {
  


  return (
    <AuthContextProvider>
      <div className="App">
        <BrowserRouter>
            <Header  />
            <Routes />
            <Footer />
        </BrowserRouter>
      </div>
    </AuthContextProvider>
  );
}

export default App;
