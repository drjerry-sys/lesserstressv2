import React from 'react';
import { useSelector } from "react-redux";
import { Route, Routes } from 'react-router-dom';
import { Home, Navbar, Blog, SignIn, PageNotFound, SignOut, Room, SignUp, SearchResult, ForgotPassword, Settings, SettingsOptions, ListProperty } from './components';

function App() {

  const { isLoggedIn } = useSelector(state=> state.data);
  const { formFailed, homeData } = useSelector(state=> state.space)

  return ( 
  <div>
    <Navbar isLoggedIn={isLoggedIn} />
    <Routes>
      <Route exact path="/" element={<Home isLoggedIn={isLoggedIn} homeData={homeData} />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/search_result/:area/:price_range" element={<SearchResult />} />
      <Route path="/sign_in" element={<SignIn />} />
      <Route path="/sign_up" element={<SignUp />} />
      <Route path="/sign_out" element={<SignOut />} />
      <Route path="/forgot_password" element={<ForgotPassword />} />
      <Route path="/list_property" element={<ListProperty formFailed={formFailed} />} />
      <Route path="/single_room" element={<Room />} />
      <Route path="/settings" exact element={<Settings />} />
      <Route path="/settings/myprofile" element={<SettingsOptions />} />
      <Route path="/settings/security" element={<SettingsOptions />} />
      <Route path="/settings/payment" element={<SettingsOptions />} />
      <Route path="/settings/blog" element={<SettingsOptions />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </div>
  );
}

export default App;