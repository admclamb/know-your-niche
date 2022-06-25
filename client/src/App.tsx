import Navbar from './components/navbar/Navbar';
import PageRoutes from './pages/Routes';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <PageRoutes />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
