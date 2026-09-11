import { useCartStore } from '../../store/cart';
import imgEmptyCart from '/assets/images/illustration-empty-cart.svg';
import iconRemoveItem from '/assets/images/icon-remove-item.svg';
import iconCarbonNeutral from '/assets/images/icon-carbon-neutral.svg';
import './styles.css';
import { calculateItemTotalPrice, calculateOrderTotal, calculateTotalQuantity } from '../../utils';

const Cart = () => {
  const { desserts } = useCartStore();

  return (
    <div className='cart-container'>
      <h2 className='cart-title'>Your Cart ({calculateTotalQuantity(desserts)})</h2>

      {desserts.length === 0 ? (
        <>
          <img className='cart-empty-img' src={imgEmptyCart} alt="" />
          <p className='cart-empty-text'>Your added items will appear here</p>
        </>
      ) : (
        <div className='cart-content'>
          <ul className='cart-content-list'>
            {desserts.map((item) => (
              <li key={item.name} className='cart-content-item'>
                <div className='cart-item-infos-container'>
                  <p className='cart-item-name'>{item.name}</p>
                  <div>
                    <span className='cart-item-quantity'>{item.quantity}x</span>
                    <span className='cart-item-unity-price'>{`@ $${item.price.toFixed(2)}`}</span>
                    <span className='cart-item-total-price'>{`$${(calculateItemTotalPrice(item)).toFixed(2)}`}</span>
                  </div>
                </div>
                <button className='cart-item-remove-button'>
                  <img src={iconRemoveItem} alt="" />
                </button>
              </li>
            ))}
          </ul>
          <div className='cart-order-total-container'>
            <p>Order Total</p>
            <span>{`$${calculateOrderTotal(desserts).toFixed(2)}`}</span>
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