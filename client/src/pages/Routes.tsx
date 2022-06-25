import { Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Login from './Login/Login';
import NoMatch from './noMatch/NoMatch';
const PageRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default PageRoutes;
