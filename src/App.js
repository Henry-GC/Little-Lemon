import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Reserve from './components/Reserve';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/reservar' element={<Reserve/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
