import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";


function App() {
  return (
    <>
    <Header />
    <div className="flex h-full w-full justify-center items-center">
    <Container />
    </div>
    <Footer />
    </>
  );
}

export default App;
