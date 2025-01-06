export const getFoodByCategory = (categoryId, dataFood) => {
  let result = [];

  dataFood?.data.map((item) => {
    if (Number(categoryId) === Number(item.category_aid)) {
      result.push(item);
    }
  });

  return result;
};

export const getCategoryPrices = (dataCategory, dataFood) => {
  let result = [];
  let resultCategoryId = [];

  dataCategory?.data.map((categoryItem) => {
    let isResultCategoryExist = false;

    dataFood?.data.map((foodItem) => {
      // BOOLEAN CHECK IF CATEGORY EXIST IN RESULT CATEGORY ARRAY
      isResultCategoryExist = resultCategoryId.includes(
        Number(categoryItem.category_aid)
      );

      // GET INDEX OF EXISTING CATEGORY
      const getIndexCategoryItem = resultCategoryId.indexOf(
        foodItem.food_category_id
      );

      //IF CATEGORY NOT EXIST ADD CATEGORY WITH PRICE
      if (
        Number(categoryItem.category_aid) ===
          Number(foodItem.food_category_id) &&
        isResultCategoryExist === false
      ) {
        resultCategoryId.push(categoryItem.category_aid);
        result.push({
          ...categoryItem,
          menu_price: Number(foodItem.food_price),
        });
      }

      // IF CATEGORY EXIST ADD MENU PRICE TO CATEGORY

      if (
        Number(categoryItem.category_aid) ===
          Number(foodItem.food_category_id) &&
        isResultCategoryExist === true &&
        getIndexCategoryItem >= 0
      ) {
        result[getIndexCategoryItem].menu_price += Number(foodItem.food_price);
      }
    });

    if (!isResultCategoryExist) {
      result.push({ ...categoryItem, menu_price: 0 });
      resultCategoryId.push(categoryItem.category_aid);
    }
  });
  return result;
};
