import "./App.css";
import GlobalStyle from "./components/Common/GlobalStyle";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import MessageTab from "./components/MessageTab";
import { useContext } from "react";
import { AuthContext } from "./components/Context/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);

  const HomeProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" replace />;
    } else {
      return children;
    }
  };

  const LoginProtecteRoute = ({ children }) => {
    if (currentUser) {
      return <Navigate to="/" replace />;
    } else {
      return children;
    }
  };

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes path="/">
          <Route
            index
            path="/"
            element={
              <HomeProtectedRoute>
                <MessageTab />
              </HomeProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <LoginProtecteRoute>
                <Login />
              </LoginProtecteRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
