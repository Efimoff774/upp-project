import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import React from "react";

function App() {
  const [items, setItems] = React.useState([]);
  const [itemsInCart, setItemsInCart] = React.useState([]);
  const [searchValue, setsearchValue] = React.useState("");
  const [isDrawerOpened, setIsDrawerOpened] = React.useState(false);

  // тк при изменении любого юзСтейта его массива у нас заного рендерится компанент основной, то будет происходить бесконечное количество запросов, поэтому надо использоваться хук юз эффект, который будет выполнять запрос только при первом рендере основгого компанента

  React.useEffect(() => {
    fetch("https://634c0bd1317dc96a309020f0.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => setItems(json));
  }, []);

  // const addToCart = (obj) => {
  //   setItemsInCart([...itemsInCart, obj]);
  // };

  const addToCart = (obj) => {
    if (itemsInCart.find((item) => item.title === obj.title)) {
      setItemsInCart((prev) => prev.filter((item) => item.title !== obj.title)); // item тайтл должен быть не равным тайтлу обжекта, тогда фильтрация проходит
    } else {
      setItemsInCart([...itemsInCart, obj]);
    }
  };

  const changeSearchInput = (event) => {
    setsearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {/* отображение блока по условию */}
      {isDrawerOpened ? (
        <Drawer items={itemsInCart} onClick={() => setIsDrawerOpened(false)} />
      ) : null}
      <Header onClickBasket={() => setIsDrawerOpened(true)} />
      <div className="content">
        <div className="d-flex align-center justify-between mb-30">
          <h1>{searchValue ? `Поиск по «${searchValue}»` : "Все кейсы"}</h1>
          <div className="search-block d-flex align-center">
            <img src="/img/search.svg" alt="Search"></img>
            <input
              onChange={changeSearchInput}
              value={searchValue}
              placeholder="Кейсы, принты"
            ></input>
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item) => (
              <Card
                key={item.title}
                title={item.title}
                price={item.price}
                imageURL={item.imageURL}
                onPlus={(obj) => addToCart(obj)}
                onFavorite={() => console.log("Вы добавили в избранное")}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
export default App;
