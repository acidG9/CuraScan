import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./assets/Navbar";
import Home from "./assets/Home";
import Footer from "./assets/Footer";
import Prediction from "./assets/Prediction";
import Login from "./assets/Login";
import History from "./assets/History";
import API from "./axios";

const isAuthenticated = async () => {
  const token = localStorage.getItem("token");
  if (!token) return false;

  try {
    const res = await API.get("/auth/verify");
    return res.data.valid;
  } catch (err) {
    localStorage.removeItem("token");
    console.error(err);
    return false;
  }
};

const ProtectedRoute = ({ children }) => {
  const [allowed, setAllowed] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const result = await isAuthenticated();
      setAllowed(result);
    };
    checkAuth();
  }, []);

  if (allowed === null) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="loading-spinner"></div>
          <div>Checking Authentication...</div>
        </div>
      </div>
    );
  }
  
  return allowed ? children : <Navigate to="/" />;
};

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          localStorage.getItem("token") ? <Navigate to="/home" /> : <Login />
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

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
