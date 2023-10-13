import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
import { setCategories} from "../store/categories/category.action";
import { useDispatch } from "react-redux";
import CategoriesPreview from "../routes/categories-preview/categories-preview.component";
import Category from "../routes/category/category.component";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArry = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArry));
    };
    getCategoriesMap();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
