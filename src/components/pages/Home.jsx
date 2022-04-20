import React, { useCallback, useEffect } from "react";
import { Categories, PizzaBlock, PizzaLoadingBlock, SortPopup } from "../index";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setSortBy } from "../../redux/actions/filters";
import { fetchPizzas } from "../../redux/actions/pizzas";
import { addPizzaToCart } from "../../redux/actions/cart";

const categoryNames = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const sortItems = [
  { name: "популярности", type: "popular", order: "desc" },
  { name: "цене", type: "price", order: "desc" },
  { name: "алфавиту", type: "name", order: "asc" },
];

function Home() {
  const dispatch = useDispatch();

  const { items, isLoaded } = useSelector(({ pizzas }) => pizzas);

  const { category, sortBy } = useSelector(({ filters }) => filters);

  const cartItems = useSelector(({ cart }) => cart.items);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectType = useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddPizzaToCart = (obj) => {
    dispatch(addPizzaToCart(obj));
  };

  useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={categoryNames}
          onClickCategory={onSelectCategory}
          activeCategory={category}
        />
        <SortPopup
          items={sortItems}
          activeSortType={sortBy.type}
          onClickSortType={onSelectType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => {
              return (
                <PizzaBlock
                  onClickAddPizza={handleAddPizzaToCart}
                  addedCount={cartItems[obj.id] && cartItems[obj.id].length}
                  key={obj.id}
                  {...obj}
                />
              );
            })
          : Array(12)
              .fill(0)
              .map((_, i) => <PizzaLoadingBlock key={i} />)}
      </div>
    </div>
  );
}

export default Home;
