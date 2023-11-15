import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import Login from "./pages/Login/Login";
import Layout from "./templates/Layout";
import UserProfile from "./pages/UserProfile/UserProfile";
import Register from "./pages/Register/Register";
import DatVe from "./pages/DatVe/DatVe";
import NotFound from "./pages/NotFound/NotFound";

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
        <Route
          path="/booking/:maLichChieu"
          element={
            <Layout>
              <DatVe />
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
