import "./category-preview.styles.scss";
import ProductCard from "../product-card/product-card.component";
import { Link } from "react-router-dom";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2 className="category-preview-title">
        <Link to={title}>{title.toUpperCase()}</Link>
      </h2>
      <div className="preview">
        {products.map(
          (product, idx) =>
            idx < 4 && <ProductCard key={product.id} product={product} />
        )}
      </div>
    </div>
  );
};

export default CategoryPreview;
