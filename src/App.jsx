import data from '../data.json';
import Card from "./components/Card";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <main className="main-container">
        <div className="title-card-grid-group">
          <h1 className="main-title">Desserts</h1>
          <ul className="card-grid">
            {data.map((item) => (
              <li key={item.name}>
                <Card key={item.name}
                  imgMobile={item.image.mobile}
                  imgTablet={item.image.tablet}
                  imgDesktop={item.image.desktop}
                  category={item.category}
                  name={item.name}
                  price={item.price}
                />
              </li>
            ))}
          </ul>
        </div>

        <Cart />
      </main>

      <Footer />
    </>
  )
}

export default App
