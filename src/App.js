import React from 'react';
import { Home, Navbar, Blog, SignIn, SignOut, Room, SignUp, SearchResult, ForgotPassword, Settings, SettingsOptions, ListProperty } from './components';
import { Route, Routes } from 'react-router-dom';

function App() {
  return ( 
  <div>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/search_result" element={<SearchResult />} />
      <Route path="/sign_in" element={<SignIn />} />
      <Route path="/sign_up" element={<SignUp />} />
      <Route path="/sign_out" element={<SignOut />} />
      <Route path="/forgot_password" element={<ForgotPassword />} />
      <Route path="/list_property" element={<ListProperty />} />
      <Route path="/single_room" element={<Room />} />
      <Route path="/settings" exact element={<Settings />} />
      <Route path="/settings/myprofile" element={<SettingsOptions />} />
      <Route path="/settings/security" element={<SettingsOptions />} />
      <Route path="/settings/payment" element={<SettingsOptions />} />
      <Route path="/settings/blog" element={<SettingsOptions />} />
      <Route path="/settings/bookmark" element={<SettingsOptions />} />
    </Routes>
  </div>
  );
}

export default App;