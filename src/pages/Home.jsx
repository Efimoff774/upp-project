import Card from "../components/Card/Card";
import React from "react";


function Home({ itemsInCart, items, searchValue, setSearchValue = '', changeSearchInput, onAddToFavorite, addToCart, isLoading, favorites }) {

    const renderItems = () => {
        return (isLoading ? Array(8).fill(<Card loading={isLoading} />) : items.filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase()))

        )
            .map((item) => (
                <Card
                    id={item.id}
                    key={item.title}
                    title={item.title}
                    price={item.price}
                    imageURL={item.imageURL}
                    onPlus={(obj) => addToCart(obj)}
                    onFavorite={(obj) => onAddToFavorite(obj)}
                    favorited={favorites.some(obj => Number(obj.id) === Number(item.id))}
                    loading={isLoading}

                />
            ))

    }
    return (
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
                {renderItems()}
            </div>
        </div>
    );
}

export default Home