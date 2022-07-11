import { useState } from "react";
import { User } from "./ts/interfaces/User";
import Navbar from "./components/navbar/Navbar";
import PageRoutes from "./pages/Routes";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [user, setUser] = useState<User | null>(null);
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <PageRoutes user={null} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
