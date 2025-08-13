import './App.css'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Home from './pages/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogIn from './pages/login';
import User from './pages/user';

function App() {

  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LogIn />}/>
            <Route path='/user' element={<User />}/>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
