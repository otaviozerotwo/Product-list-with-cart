import { useCartStore } from '../../store/cart';
import imgEmptyCart from '/assets/images/illustration-empty-cart.svg';
import iconRemoveItem from '/assets/images/icon-remove-item.svg';
import iconCarbonNeutral from '/assets/images/icon-carbon-neutral.svg';
import './styles.css';

const Cart = () => {
  const { desserts, addDessert } = useCartStore();

  return (
    <div className='cart-container'>
      <h2 className='cart-title'>Your Cart ({desserts.length})</h2>

      {desserts.length !== 0 ? (
        <>
          <img className='cart-empty-img' src={imgEmptyCart} alt="" />
          <p className='cart-empty-text'>Your added items will appear here</p>
        </>
      ) : (
        <div className='cart-content'>
          <ul className='cart-content-list'>
            <li className='cart-content-item'>
              <div className='cart-item-infos-container'>
                <p className='cart-item-name'>Classic Tiramisu</p>
                <div>
                  <span className='cart-item-quantity'>1x</span>
                  <span className='cart-item-unity-price'>@ $5.50</span>
                  <span className='cart-item-total-price'>$ 5.50</span>
                </div>
              </div>
              <button className='cart-item-remove-button'>
                <img src={iconRemoveItem} alt="" />
              </button>
            </li>
          </ul>
          <div className='cart-order-total-container'>
            <p>Order Total</p>
            <span>$46.50</span>
          </div>
          <div className='cart-info-message'>
            <img src={iconCarbonNeutral} alt="" />
            <p>This is a <strong>carbon-neutral</strong> delivery</p>
          </div>
          <button className='cart-confirm-button'>Confirm Order</button>
        </div>
      )}
    </div>
  );
}

export default Cart;