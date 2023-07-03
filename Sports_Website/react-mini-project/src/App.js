import logo from "./logo.svg";
import "./App.css";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import CheckOut from "./Pages/CheckOut";
import Home from "./Pages/Home";
import UserHome from "./Pages/UserHome";
import Kayak from "./Pages/products/Kayak";
import Football from "./Pages/products/Football";
import Cricketset from "./Pages/products/Cricketset";
import Golfset from "./Pages/products/Golfset";
import Shoe1 from "./Pages/products/Shoe1";
import Shoe2 from "./Pages/products/Shoe2";
import Shoe3 from "./Pages/products/Shoe3";
import Archery from "./Pages/products/Archery";
import Archery2 from "./Pages/products/Archery2";
import Archery3 from "./Pages/products/Archery3";
import Archery4 from "./Pages/products/Archery4";
import Underterrain from "./Pages/products/Underterrain";
import Boxing from "./Pages/products/boxing";
import Cricketbat from "./Pages/products/cricketbat";
import Tabletennis from "./Pages/products/Tabletennis";
import Cricketballfeeder from "./Pages/products/cricketballfeeder";
import { BrowserRouter, Navigate, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Home" element={<Home />} />

          <Route
            path="/UserHome"
            element={
              <ProtectedRoute>
                <UserHome />
              </ProtectedRoute>
            }
          />
          <Route
            path="/CheckOut"
            element={
              <ProtectedRoute>
                <CheckOut />
              </ProtectedRoute>
            }
          />
          <Route
            path="/kayak"
            element={
              <ProtectedRoute>
                <Kayak />
              </ProtectedRoute>
            }
          />
          <Route
            path="/golfset"
            element={
              <ProtectedRoute>
                <Golfset />
              </ProtectedRoute>
            }
          />
          <Route
            path="/football"
            element={
              <ProtectedRoute>
                <Football />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cricketset"
            element={
              <ProtectedRoute>
                <Cricketset />
              </ProtectedRoute>
            }
          />
          <Route
            path="/shoe1"
            element={
              <ProtectedRoute>
                <Shoe1 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/shoe2"
            element={
              <ProtectedRoute>
                <Shoe2 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/shoe3"
            element={
              <ProtectedRoute>
                <Shoe3 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tabletennis"
            element={
              <ProtectedRoute>
                <Tabletennis />
              </ProtectedRoute>
            }
          />
          <Route
            path="/archery2"
            element={
              <ProtectedRoute>
                <Archery2 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/archery3"
            element={
              <ProtectedRoute>
                <Archery3 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/archery"
            element={
              <ProtectedRoute>
                <Archery />
              </ProtectedRoute>
            }
          />
          <Route
            path="/underterrain"
            element={
              <ProtectedRoute>
                <Underterrain />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cricketballfeeder"
            element={
              <ProtectedRoute>
                <Cricketballfeeder />
              </ProtectedRoute>
            }
          />
          <Route
            path="/archery4"
            element={
              <ProtectedRoute>
                <Archery4 />
              </ProtectedRoute>
            }
          />
          <Route
            path="/boxing"
            element={
              <ProtectedRoute>
                <Boxing />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cricketbat"
            element={
              <ProtectedRoute>
                <Cricketbat />
              </ProtectedRoute>
            }
          />

          <Route path="/Register" element={<Register />} />
          <Route
            path="/AboutUs"
            element={
              <ProtectedRoute>
                <AboutUs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ContactUs"
            element={
              <ProtectedRoute>
                <ContactUs />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function ProtectedRoute({ children }) {
  let loginStatus = localStorage.getItem("loginStatus");
  if (!loginStatus) {
    return <Navigate to={"/login"} replace={true} />;
  }

  return children;
}

export default App;
