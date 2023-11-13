import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/trangchu" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
