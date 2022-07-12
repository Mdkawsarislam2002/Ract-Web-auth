import React, { useState } from "react";
import Home from "./pages/Home";
import Login from "./Components/login";
import SingIn from "./Components/SingIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import NewContext from "./Context/NewContext";
import ErrorPage from "./Components/ErrorPage";
import AboutUs from "./pages/AboutUs";
import FirstPage from "./Components/FirstPage";

const App = () => {
  const [UserName, setUserName] = useState("Yeasin");
  const [UserMail, setUserMail] = useState("mdkawsarislam2002@gmail.com");
  const [UserImg, setUserImg] = useState(
    "https://avatars.githubusercontent.com/u/87494463?v=4"
  );
  return (
    <>
      <BrowserRouter>
        <NewContext.Provider value={{ UserName, UserMail, UserImg }}>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/firstpage" element={<FirstPage />}></Route>
            <Route path="/aboutus" element={<AboutUs />}></Route>
            <Route path="/singIn" element={<SingIn />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/error" element={<ErrorPage />}></Route>
          </Routes>
        </NewContext.Provider>
      </BrowserRouter>
      ,
    </>
  );
};

export default App;
