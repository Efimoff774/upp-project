import React from "react";

import Header from "./components/Header";
import Drawer from "./components/Drawer";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import AppContext from "./context";
import Orders from "./pages/Orders";

function App() {
  const [items, setItems] = React.useState([]);
  const [itemsInCart, setItemsInCart] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setsearchValue] = React.useState("");
  const [isDrawerOpened, setIsDrawerOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  // тк при изменении любого юзСтейта его массива у нас заного рендерится компанент основной, то будет происходить бесконечное количество запросов, поэтому надо использоваться хук юз эффект, который будет выполнять запрос только при первом рендере основгого компанента

  React.useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const cartResponse = await axios.get(
        "https://634c0bd1317dc96a309020f0.mockapi.io/cart"
      );

      const favoritesResponse = await axios.get(
        "https://634c0bd1317dc96a309020f0.mockapi.io/favorites"
      );

      const itemsResponse = await axios.get(
        "https://634c0bd1317dc96a309020f0.mockapi.io/items"
      );

      setIsLoading(false);

      setItemsInCart(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
    }

    fetchData();
  }, []);

  const addToCart = (obj) => {
    if (itemsInCart.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(
        `https://634c0bd1317dc96a309020f0.mockapi.io/cart/${obj.id}`
      );
      setItemsInCart((prev) =>
        prev.filter((item) => Number(item.id) !== Number(obj.id))
      );
    } else {
      axios.post("https://634c0bd1317dc96a309020f0.mockapi.io/cart", obj);
      setItemsInCart((prev) => [...prev, obj]);
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://634c0bd1317dc96a309020f0.mockapi.io/cart/${id}`);
    setItemsInCart((prev) =>
      prev.filter((item) => Number(item.id) !== Number(id))
    );
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(
          `https://634c0bd1317dc96a309020f0.mockapi.io/favorites/${obj.id}`
        );
        setFavorites((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        const { data } = await axios.post(
          "https://634c0bd1317dc96a309020f0.mockapi.io/favorites",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить в фавориты, ошибка: ", error);
    }
  };

  // const addToCart = (obj) => {
  //   if (itemsInCart.find((item) => item.title === obj.title)) {
  //     setItemsInCart((prev) => prev.filter((item) => item.title !== obj.title)); // item тайтл должен быть не равным тайтлу обжекта, тогда фильтрация проходит
  //   } else {
  //     setItemsInCart((prev) => [...prev, obj]);
  //   }
  // };

  const changeSearchInput = (event) => {
    setsearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return itemsInCart.some((obj) => Number(obj.id) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        items,
        itemsInCart,
        favorites,
        isItemAdded,
        setIsDrawerOpened,
        setItemsInCart,
        addToCart,
        onAddToFavorite,
      }}
    >
      <div className="wrapper clear">
        {/* отображение блока по условию */}
        {isDrawerOpened ? (
          <Drawer
            items={itemsInCart}
            onClick={() => setIsDrawerOpened(false)}
            onRemove={onRemoveItem}
          />
        ) : null}
        <Header onClickBasket={() => setIsDrawerOpened(true)} />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                itemsInCart={itemsInCart}
                favorites={favorites}
                items={items}
                searchValue={searchValue}
                changeSearchInput={changeSearchInput}
                onAddToFavorite={onAddToFavorite}
                addToCart={addToCart}
                isLoading={isLoading}
              />
            }
          />

          <Route
            path="/favorites"
            element={
              <Favorites
                addToCart={addToCart}
                onAddToFavorite={onAddToFavorite}
              />
            }
          ></Route>

          <Route path="/orders" element={<Orders />}></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}
export default App;
