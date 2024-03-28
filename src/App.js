import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import BookingPage from './components/BookingPage';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/reservar' element={<BookingPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
