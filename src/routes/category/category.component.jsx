import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/category.selector";
import ProductCard from "../../components/product-card/product-card.component";
import {
  CategoryContainer,
  CategoryTitle,
  CategoryProduct,
} from "./category.styles";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategories);
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
