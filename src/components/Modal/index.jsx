import { useCartStore } from '../../store/cart';
import { calculateItemTotalPrice, calculateOrderTotal } from '../../utils';
import PrimaryButton from '../PrimaryButton';
import iconOrderConfirmed from '/assets/images/icon-order-confirmed.svg';
import './styles.css';

const Modal = ({ isOpen, onClose }) => {
  const { desserts, clearCart } = useCartStore();

  if (!isOpen) return null;

  const handleStarNewOrder = () => {
    clearCart();
    onClose();
  }

  return (
    <div className='modal-overlay' onClick={onClose}>
      <div className='modal-container' onClick={(e) => e.stopPropagation()}>
        <img className='modal-icon' src={iconOrderConfirmed} alt="" />
        <h2 className='modal-title'>Order Confirmed</h2>
        <p className='modal-text'>We hope you enjoy your food!</p>

        <div className='modal-list-items'>
          <ul>
            {desserts.map((item) => (
              <li key={item.name} className='modal-item-container'>
                <div className='modal-item-content'>
                  <div className='modal-item-data'>
                    <img className='modal-item-thumbnail' src={item.imgThumbnail} alt={item.name} />
                    <div className='modal-item-name-quantity-price-group'>
                      <p className='modal-item-name'>{item.name}</p>
                      <div className='modal-item-quantity-price-group'>
                        <span className='modal-item-quantity'>{item.quantity}x</span>
                        <span className='modal-item-price'>
                          {`@ $${item.price.toFixed(2)}`}
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className='modal-item-total-price'>{`$${(calculateItemTotalPrice(item)).toFixed(2)}`}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className='modal-total-order'>
            <p>Order Total</p>
            <span>{`$${calculateOrderTotal(desserts).toFixed(2)}`}</span>
          </div>
        </div>

        <PrimaryButton onClick={handleStarNewOrder}>Start New Order</PrimaryButton>
      </div>
    </div>
  );
}

export default Modal;