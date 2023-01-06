import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./pages/getStart/Welcome";
import Welcome_2 from "./pages/getStart/Welcome_2";
import Welcome_3 from "./pages/getStart/Welcome_3";
import FindParking from "./pages/FindParking";
import SigUp from "./pages/SigUp";
import Sigin from "./pages/Sigin";
import Account from "./pages/Account";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/1" element={<Welcome_2 />} />
        <Route path="/2" element={<Welcome_3 />} />
        <Route path="/parking" element={<FindParking />} />
        <Route path="/inscription" element={<SigUp />} />
        <Route path="/connexion" element={<Sigin />} />
        <Route path="/compte" element={<Account />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
