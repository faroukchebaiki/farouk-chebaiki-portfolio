import "aos/dist/aos.css";
import Footer from "./Layouts/Footer/Footer";
import Header from "./Layouts/Header/Header";
import Home from "./Pages/Home";
import "./tailwind.css";

function App() {
  return (
    <>
      <Header />
      <main className='dark dark\:bg-slate-900 ' style={{
          
      }} >
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
