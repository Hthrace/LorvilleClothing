/* eslint-disable react/prop-types */
import "./category-item.styles.scss";

const CatergoryItem = ({ catergories }) => {
  const { title, imageUrl } = catergories;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CatergoryItem;
