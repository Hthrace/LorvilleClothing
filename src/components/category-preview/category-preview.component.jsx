import ProductCard from "../product-card/product-card.component";
import { Link } from "react-router-dom";
import {
  CategoryPreviewContainer,
  CategoryPreviewTitle,
  Preview,
} from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <CategoryPreviewTitle>
        <Link to={title}>{title.toUpperCase()}</Link>
      </CategoryPreviewTitle>
      <Preview>
        {products.map(
          (product, idx) =>
            idx < 4 && <ProductCard key={product.id} product={product} />
        )}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
