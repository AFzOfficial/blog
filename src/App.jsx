import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar, Posts, Post, NotFound, Admin, Login, Home, Footer } from './components'

function App() {

  return (
    <BrowserRouter>
    
    <Navbar />

    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/logs' element={<Posts />} />
      <Route path='/logs/:id' element={<Post />} />

      <Route path='/admin' element={<Admin />} />
      <Route path='/admin/login' element={<Login />} />

      <Route path='*' element={<NotFound />} />

    </Routes>    

    <Footer />

    </BrowserRouter>
  )
}

export default App