import Header from "./components/Header";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Home from "./pages/Home";
import Presentation from "./pages/Presentation";
import Product from "./pages/Product";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Presentation />
      <Product />
      <Faq />
      <Contact />
    </div>
  );
}

export default App;
