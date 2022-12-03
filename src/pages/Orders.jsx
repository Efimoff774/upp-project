import Card from "../components/Card/Card";
import React from "react";
import axios from "axios";
import AppContext from "../context";


function Orders() {

    const { onAddToFavorite, favorites } = React.useContext(AppContext)

    const [orders, setOrders] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true);


    React.useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('https://634c0bd1317dc96a309020f0.mockapi.io/orders')
                setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))
                setIsLoading(false)
            } catch (error) {
                alert(error)
            }
        })()
    }, [])


    return (
        <div className="content">
            <div className="d-flex align-center justify-between mb-30">
                <h1>{"Мои заказы"}</h1>

            </div>
            <div className="d-flex flex-wrap">
                {(isLoading ? Array(8).fill(<Card loading={isLoading} />) : orders)
                    .map((item, index) => (
                        <Card
                            id={item.id}
                            key={item.title}
                            title={item.title}
                            price={item.price}
                            imageURL={item.imageURL}
                            onFavorite={(obj) => onAddToFavorite(obj)}
                            favorited={favorites.some(obj => Number(obj.id) === Number(item.id))}
                            loading={isLoading}

                        />
                    ))}
            </div>
        </div>
    );
}

export default Orders