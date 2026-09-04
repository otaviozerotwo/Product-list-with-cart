import imgEmptyCart from '../../assets/images/illustration-empty-cart.svg';
import './styles.css';

const Cart = () => (
  <div className='cart-container'>
    <h2 className='cart-title'>Your Cart (0)</h2>
    <img className='cart-empty-img' src={imgEmptyCart} alt="" />
    <p className='cart-empty-text'>Your added items will appear here</p>
  </div>
);

export default Cart;