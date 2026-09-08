import Card from "./components/Card";
import imgWaffleMobile from './assets/images/image-waffle-mobile.jpg';
import imgWaffleTable from './assets/images/image-waffle-tablet.jpg';
import imgWaffleDesktop from './assets/images/image-waffle-desktop.jpg';
import Cart from "./components/Cart";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <main className="main-container">
        <div className="title-card-grid-group">
          <h1 className="title">Desserts</h1>
          <div className="card-grid">
            <Card
              imgMobile={imgWaffleMobile}
              imgTablet={imgWaffleTable}
              imgDesktop={imgWaffleDesktop}
              category='Waffle'
              name='Waffle with Berries'
              price='$6.50'
            />
            <Card
              imgMobile={imgWaffleMobile}
              imgTablet={imgWaffleTable}
              imgDesktop={imgWaffleDesktop}
              category='Waffle'
              name='Waffle with Berries'
              price='$6.50'
            />
            <Card
              imgMobile={imgWaffleMobile}
              imgTablet={imgWaffleTable}
              imgDesktop={imgWaffleDesktop}
              category='Waffle'
              name='Waffle with Berries'
              price='$6.50'
            />
            <Card
              imgMobile={imgWaffleMobile}
              imgTablet={imgWaffleTable}
              imgDesktop={imgWaffleDesktop}
              category='Waffle'
              name='Waffle with Berries'
              price='$6.50'
            />
          </div>
        </div>

        <Cart />
      </main>

      <Footer />
    </>
  )
}

export default App
