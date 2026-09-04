import Card from "./components/Card";
import imgWaffle from './assets/images/image-waffle-mobile.jpg';
import Cart from "./components/Cart";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <main className="main-container">
        <div>
          <h1 className="title">Desserts</h1>
          <div className="card-grid">
            <Card 
              image={imgWaffle}
              category='Waffle'
              name='Waffle with Berries'
              price='$6.50'
            />      
            <Card 
              image={imgWaffle}
              category='Waffle'
              name='Waffle with Berries'
              price='$6.50'
            />      
            <Card 
              image={imgWaffle}
              category='Waffle'
              name='Waffle with Berries'
              price='$6.50'
            />      
            <Card 
              image={imgWaffle}
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
