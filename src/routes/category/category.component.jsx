import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import {
  CategoryContainer,
  CategoryTitle,
  CategoryProduct,
} from "./category.styles";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(
    categoriesMap[category.toLowerCase()]
  );

  useEffect(() => {
    setProducts(categoriesMap[category.toLowerCase()]);
  }, [category, categoriesMap]);

  return (
    <CategoryContainer>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryProduct>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryProduct>
    </CategoryContainer>
  );
};

export default Category;
