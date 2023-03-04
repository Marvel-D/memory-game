import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./shared/NavBar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";


const App = () => {

  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Routes>
      <footer className="font-extrabold flex justify-center items-center py-5  bg-red-900">
        Build by Marvel
      </footer>
    </div>
  );
};
export default App;
