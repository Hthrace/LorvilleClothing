import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  selectCategories,
  selectIsCategoriesLoading,
} from "../../store/categories/category.selector";
import ProductCard from "../../components/product-card/product-card.component";
import {
  CategoryContainer,
  CategoryTitle,
  CategoryProduct,
} from "./category.styles";
import Spinner from "../../components/spinner/spinner.component";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategories);
  const isLoading = useSelector(selectIsCategoriesLoading);
  const [products, setProducts] = useState(
    categoriesMap[category.toLowerCase()]
  );

  useEffect(() => {
    setProducts(categoriesMap[category.toLowerCase()]);
  }, [category, categoriesMap]);
  console.log(isLoading);

  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          <CategoryProduct>
            {products &&
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </CategoryProduct>
        </CategoryContainer>
      )}
    </>
  );
};

export default Category;
