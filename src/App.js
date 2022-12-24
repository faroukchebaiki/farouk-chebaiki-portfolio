import "aos/dist/aos.css";
import Footer from "./Layouts/Footer/Footer";
import Header from "./Layouts/Header/Header";
import Home from "./Pages/Home";
import "./tailwind.css";

function App() {
  return (
    <>
      <Header />
      <main style={{
        backgroundColor:"grey"  
      }} >
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
