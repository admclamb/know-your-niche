import { Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Login from './Login/Login';
import Register from './Register/Register';
import NoMatch from './noMatch/NoMatch';
const PageRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default PageRoutes;
