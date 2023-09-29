/* eslint-disable react/prop-types */
import "./directory-item.styles.scss";

const DirectoryItem = ({ catergories }) => {
  const { title, imageUrl } = catergories;
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
