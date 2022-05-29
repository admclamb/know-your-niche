import { Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import NoMatch from './noMatch/NoMatch';
const PageRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default PageRoutes;
