import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORY_ACTION_TYPES } from "./category.types";

export const setCategories = (categories) => {
  return createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES, categories);
};
