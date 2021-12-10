import React from 'react';
import { Home, Navbar, Blog, SignIn, SignOut } from './components';
import { Route, Redirect, Routes } from 'react-router-dom';

function App() {
  return ( 
  <div>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/sign_in" element={<SignIn />} />
      <Route path="/sign_up" element={<SignOut />} />
    </Routes>
  </div>
  );
}

export default App;