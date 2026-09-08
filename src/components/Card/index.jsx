import iconAddToCart from '../../assets/images/icon-add-to-cart.svg';
import './styles.css';

const Card = ({ imgMobile, imgTablet, imgDesktop, name, category, price }) => (
  <div className='card-container'>
    <div className='card-img-button-group'>
      <picture className='card-img-container'>
        <source className='card-img' media='(min-width: 48rem)' srcSet={imgDesktop} />
        <source className='card-img' media='(min-width: 26.5625rem)' srcSet={imgTablet} />
        <img className='card-img' src={imgMobile} alt="" />
      </picture>
      <button className='card-button'>
        <img src={iconAddToCart} alt="" />
        Add to Cart
      </button>
    </div>
    <div className='card-infos'>
      <span className='card-info-category'>{category}</span>
      <h3 className='card-info-name'>{name}</h3>
      <span className='card-info-price'>{price}</span>
    </div>
  </div>
);

export default Card;