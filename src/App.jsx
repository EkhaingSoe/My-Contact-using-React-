import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from './Pages/Contact'
import Create from './Pages/Create';
import Edit from './Pages/Edit';

const App = () => {
  return (
    <div className='container mx-auto'>
      <Routes>
        <Route path="/" element={<Contact />} />
        <Route path="/create" element={<Create/>} />
        <Route path="/edit/:id" element={<Edit/>} />
      </Routes>
    </div>
  );
}

export default App