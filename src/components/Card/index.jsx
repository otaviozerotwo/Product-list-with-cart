import { useCartStore } from '../../store/cart';
import iconAddToCart from '/assets/images/icon-add-to-cart.svg';
import iconDecrementQuantity from '/assets/images/icon-decrement-quantity.svg';
import iconIncrementQuantity from '/assets/images/icon-increment-quantity.svg';
import './styles.css';

const Card = ({ imgMobile, imgTablet, imgDesktop, name, category, price }) => {
  const { desserts, addDessert, increaseQuantityDessert, decrementQuantityDessert } = useCartStore();

  const isItemInCart = desserts.some((dessert) => dessert.name === name);

  const itemInCart = desserts.find((dessert) => dessert.name === name);
  const quantity = itemInCart ? itemInCart.quantity : 1;

  const handleClick = () => {
    addDessert(name, category, price, 1);
  }

  const handleDecrement = () => {
    if (quantity >= 2) {
      decrementQuantityDessert(name);
    }
  }

  const handleIncrement = () => {
    increaseQuantityDessert(name);
  }

  return (
    <div className='card-container'>
      <div className='card-img-button-group'>
        <picture className={!isItemInCart ? 'card-img-container' : 'card-img-container card-img-container-selected'}>
          <source className='card-img' media='(min-width: 48rem)' srcSet={imgDesktop} />
          <source className='card-img' media='(min-width: 26.5625rem)' srcSet={imgTablet} />
          <img className='card-img' src={imgMobile} alt="" />
        </picture>
        {!isItemInCart ? (
          <button
            className='card-button'
            onClick={handleClick}
          >
            <img src={iconAddToCart} alt="" />
            Add to Cart
          </button>
        ) : (
          <div className='card-button-selected'>
            <button
              className='card-button-set-quantity'
              onClick={handleDecrement}
            >
              <img src={iconDecrementQuantity} alt="" />
            </button>
            {quantity}
            <button
              className='card-button-set-quantity'
              onClick={handleIncrement}
            >
              <img src={iconIncrementQuantity} alt="" />
            </button>
          </div>
        )}
      </div>
      <div className='card-infos'>
        <span className='card-info-category'>{category}</span>
        <h3 className='card-info-name'>{name}</h3>
        <span className='card-info-price'>{`$${price.toFixed(2)}`}</span>
      </div>
    </div>
  );
};

export default Card;