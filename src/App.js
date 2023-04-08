import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Profile from "./components/Profile/Profile";

function App(props) {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Menu />
        <Routes>
          <Route
            path="/profile"
            element={
              <Profile
                profilePage={props.state.profilePage}
                addPost={props.addPost}
                updatePost={props.updatePost}
              />
            }
          />
          <Route
            path="/dialogs/*"
            element={<Dialogs state={props.state.messagePage} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
