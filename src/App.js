import { createTheme, Switch, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Shop from './Pages/Shop/Shop';
import AuthProvider from './Context/AuthProvider';

const theme = createTheme({
  palette:{
    primary:{
      main:'#ffb03a',
      contrastText:'#fff'
    }
  },
  typography:{
    fontFamily:'sans-serif'
  },
  shape:{
    borderRadius:0
  },
  
  
})


function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="shop" element={<Shop />} />   
          <Route path="about" element={<About />} />   
        </Routes>
      </BrowserRouter>
      </AuthProvider>

    </div>
    </ThemeProvider>
  );
}

export default App;
