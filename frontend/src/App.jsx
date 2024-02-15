/* eslint-disable */
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {
  BrowserRouter,
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import ChatPage from './components/Chat';
import LoginPage from './components/LoginPage';
import NotFoundPage from './components/NotFoundpage';
import useAuth from './hooks';




const PrivateRoute = ({ children }) => {
  const auth = useAuth();

  return (
    auth.loggedIn ? children : <Navigate to="/login" replace />
  )
};


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/404" element={<NotFoundPage />} />
        <Route
            path="/private"
            element={(
              <PrivateRoute>
                <ChatPage />
              </PrivateRoute>
            )}
          />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

