import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import Login from "./pages/Login/Login";
import Layout from "./templates/Layout";
import UserProfile from "./pages/UserProfile/UserProfile";
import Register from "./pages/Register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/movie/:maPhim"
          element={
            <Layout>
              <Detail />
            </Layout>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/userprofile"
          element={
            <Layout>
              <UserProfile />
            </Layout>
          }
        />
        <Route path="/dangky" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
