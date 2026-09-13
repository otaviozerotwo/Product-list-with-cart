import Cart from "./components/Cart";
import DessertList from './components/DessertList';
import Footer from "./components/Footer";

const App = () => (
  <>
    <main className="main-container">
      <DessertList />
      <Cart />
    </main>

    <Footer />
  </>
)

export default App;
