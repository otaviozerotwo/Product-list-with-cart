import { useCartStore } from '../../store/cart';
import PrimaryButton from '../PrimaryButton';
import iconOrderConfirmed from '/assets/images/icon-order-confirmed.svg';
import './styles.css';

const Modal = ({ isOpen, onClose }) => {
  const { clearCart } = useCartStore();
  
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

        <PrimaryButton onClick={handleStarNewOrder}>Start New Order</PrimaryButton>
      </div>
    </div>
  );
}

export default Modal;