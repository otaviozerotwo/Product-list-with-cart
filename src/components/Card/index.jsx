import { useState } from 'react';
import { useCartStore } from '../../store/cart';
import iconAddToCart from '/assets/images/icon-add-to-cart.svg';
import iconDecrementQuantity from '/assets/images/icon-decrement-quantity.svg';
import iconIncrementQuantity from '/assets/images/icon-increment-quantity.svg';
import './styles.css';

const Card = ({ imgMobile, imgTablet, imgDesktop, name, category, price }) => {
  const [count, setCount] = useState(1);
  const { desserts, addDessert, increaseQuantityDessert, decrementQuantityDessert } = useCartStore();

  const isItemInCart = desserts.some((dessert) => dessert.name === name);

  const handleClick = () => {
    addDessert(name, category, price, count);
  }

  const handleDecrement = () => {
    if (count >= 2) {
      setCount((count) => count - 1);
      decrementQuantityDessert(name);
    }
  }

  const handleIncrement = () => {
    setCount((count) => count + 1);
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
            {count}
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