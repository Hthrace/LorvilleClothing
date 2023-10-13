import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

export const selectCategoriesCheck = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategories = createSelector(
  [selectCategoriesCheck],
  (categories) =>
    categories.reduce((acc, { title, items }) => {
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
