import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './home/Home';
import Login from './Login/Login';
import Register from './Register/Register';
import NoMatch from './NoMatch/NoMatch';
import LandingPage from './LandingPage/LandingPage';
const PageRoutes = ({ user }: any) => {
  const navigate = useNavigate();
  if (!user) {
  }
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/welcome" element={<LandingPage />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default PageRoutes;
