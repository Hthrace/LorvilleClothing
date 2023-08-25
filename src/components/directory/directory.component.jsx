/* eslint-disable react/prop-types */
import "./directory.styles.scss";
import CatergoryItem from "../category-item/category-item.component";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((c) => (
        <CatergoryItem key={c.id} catergories={c} />
      ))}
    </div>
  );
};

export default Directory;
