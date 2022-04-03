import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import UsersList from "./Components/UsersList";
import Detail from "./Components/Detail";
import PrivateRoute from "./Components/PrivateRoute";
import { useState } from "react";
function App() {
  const [auth, setAuth] = useState(false);
  return (
    <div>
      <NavBar auth={auth} setAuth={setAuth}></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/Users"
          element={
            <PrivateRoute auth={auth}>
              <UsersList></UsersList>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/details/:id"
          element={
            <PrivateRoute>
              <Detail></Detail>
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
