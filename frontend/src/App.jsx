import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./assets/Navbar";
import Home from "./assets/Home";
import Footer from "./assets/Footer";
import Prediction from "./assets/Prediction";
import Login from "./assets/Login";
import History from "./assets/History";

const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/" />;
};

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated() ? <Navigate to="/home" /> : <Login />
          }
        />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            </ProtectedRoute>
          }
        />

        <Route
          path="/prediction"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <Prediction />
                <Footer />
              </>
            </ProtectedRoute>
          }
        />

        <Route
          path="/history"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <History />
                <Footer />
              </>
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
