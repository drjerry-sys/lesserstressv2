import React from 'react';
import { Home, Navbar, Blog, SignIn, SignOut, SignUp } from './components';
import { Route, Routes } from 'react-router-dom';

function App() {
  return ( 
  <div>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/sign_in" element={<SignIn />} />
      <Route path="/sign_up" element={<SignUp />} />
      <Route path="/sign_out" element={<SignOut />} />
    </Routes>
  </div>
  );
}

export default App;