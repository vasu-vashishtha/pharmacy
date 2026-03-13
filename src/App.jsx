import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AppRoutes from './components/routes/AppRoutes'

import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Header from './components/home/Header';
import TopBar from './components/common/TopBar';


function App() {

  return (
    <>
      <BrowserRouter>
      <TopBar/>
      <Header/>
      <Navbar/>
        <main>
          <AppRoutes/>
        </main>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
