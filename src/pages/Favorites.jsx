import Card from "../components/Card/Card";
import React from "react";
import AppContext from "../context";


function Favorites({ onAddToFavorite, addToCart }) {
    const { favorites } = React.useContext(AppContext)

    return (
        <div className="content">
            <div className="d-flex align-center justify-between mb-30">
                <h1>{"Мои закладки"}</h1>

            </div>
            <div className="d-flex flex-wrap">
                {favorites
                    .map((item) => (
                        <Card
                            key={item.title}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            imageURL={item.imageURL}
                            favorited={true}
                            onPlus={(obj) => addToCart(obj)}
                            onFavorite={onAddToFavorite}
                        />
                    ))}
            </div>
        </div>
    );
}

export default Favorites