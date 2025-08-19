import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import Home from './pages/home/home'
import Login from './pages/login/login'
import User from './pages/user/user'

function App() {

  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/user' element={<User />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
