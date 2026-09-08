import { useState } from 'react';
import iconAddToCart from '/assets/images/icon-add-to-cart.svg';
import iconDecrementQuantity from '/assets/images/icon-decrement-quantity.svg';
import iconIncrementQuantity from '/assets/images/icon-increment-quantity.svg';
import './styles.css';

const Card = ({ imgMobile, imgTablet, imgDesktop, name, category, price }) => {
  const [selected, setSelected] = useState(false);
  const [count, setCount] = useState(1);

  const handleClick = () => {
    setSelected(true);
  }

  const handleDecrement = () => {
    if (count >= 2) {
      setCount((count) => count - 1);
    }
  }

  const handleIncrement = () => {
    setCount((count) => count + 1);
  }

  return (
    <div className='card-container'>
      <div className='card-img-button-group'>
        <picture className={!selected ? 'card-img-container' : 'card-img-container card-img-container-selected'}>
          <source className='card-img' media='(min-width: 48rem)' srcSet={imgDesktop} />
          <source className='card-img' media='(min-width: 26.5625rem)' srcSet={imgTablet} />
          <img className='card-img' src={imgMobile} alt="" />
        </picture>
        <button
          className={!selected ? 'card-button' : 'card-button card-button-selected'}
          onClick={handleClick}
        >
          {!selected ? (
            <>
              <img src={iconAddToCart} alt="" />
              Add to Cart
            </>
          ) : (
            <>
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
            </>
          )}
        </button>
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