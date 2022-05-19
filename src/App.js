import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { CalcProvider } from './context/calculator/CalcContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
function App() {
  return (
    <>
      <CalcProvider>
        <Router>
          <div className='flex flex-col justify-between h-screen'>
            <Navbar />
            <main className='container mx-auto px-3 pb-12'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/notfound' element={<NotFound />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CalcProvider>
    </>
  )
}

export default App
