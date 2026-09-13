import data from '../../../data.json';
import Card from "../Card";
import './styles.css';

const DessertList = () => {
  return (
    <div className="dessert-list-container">
      <h1 className="dessert-list-title">Desserts</h1>
      <ul className="dessert-list-grid">
        {data.map((item) => (
          <li key={item.name}>
            <Card key={item.name}
              imgMobile={item.image.mobile}
              imgTablet={item.image.tablet}
              imgDesktop={item.image.desktop}
              category={item.category}
              name={item.name}
              price={item.price}
              imgThumbnail={item.image.thumbnail}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DessertList;