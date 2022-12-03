import React from "react";
import Info from "./Info";
import AppContext from '../context';
import axios from "axios";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function Drawer({ onClick, items = [], onRemove }) {

    const [isOrderComplete, setIsOrderComplete] = React.useState(false)
    const [orderId, setOrderId] = React.useState(null)
    const [isLoading, setIsLoading] = React.useState(false)

    const { itemsInCart, setItemsInCart } = React.useContext(AppContext)

    const totalPrice = itemsInCart.reduce((sum, obj) => obj.price + sum, 0)
    const nalog = totalPrice * 5 / 100
    const onClickOrder = async () => {
        try {
            setIsLoading(true)
            const { data } = await axios.post('https://634c0bd1317dc96a309020f0.mockapi.io/orders', {
                items: itemsInCart,
            })
            setOrderId(data.id)
            setIsOrderComplete(true)
            setItemsInCart([])

            for (let i = 0; i < itemsInCart.length; i++) {
                const item = itemsInCart[i]
                await axios.delete('https://634c0bd1317dc96a309020f0.mockapi.io/cart/' + item.id)
                await delay(1000)


            }

        } catch (error) {
            console.log('ошибка при создании заказа')
        }
        setIsLoading(false)
    }


    return (

        <div className="overlay">

            <div className="drawer">

                <h2>Корзина <img className="delete" src="/img/delete.svg" alt="delete" onClick={onClick}></img></h2>

                {items.length > 0 ? (
                    (
                        <div className="d-flex flex-column flex">
                            <div className="items">
                                {items.map((obj) => (
                                    <div key={obj.id} className="CartItem d-flex align-center mb-20">
                                        <img className="mr-20" width={80} height={90} src={obj.imageURL} alt=""></img>
                                        <div>
                                            <p className="mb-5">{obj.title}</p>
                                            <b>{obj.price}₽</b>
                                        </div>
                                        <img className="delete" src="/img/delete.svg" alt="delete" onClick={() => onRemove(obj.id)}></img>
                                    </div>

                                ))}
                            </div>
                            <div className="cartTotalBlock">
                                <ul>
                                    <li className="mb-20">
                                        <span >
                                            Налог 5%
                                        </span>
                                        <div>
                                        </div>
                                        <b>
                                            {nalog} ₽
                                        </b>
                                    </li>

                                    <li >
                                        <span >
                                            Итого
                                        </span>
                                        <div>
                                        </div>
                                        <b>
                                            {totalPrice} ₽
                                        </b>
                                    </li>
                                </ul>
                                <button disabled={isLoading} onClick={onClickOrder} className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="arrow"></img></button>
                            </div>
                        </div>
                    )
                ) : (
                    <Info title={isOrderComplete ? 'Заказ оформлен!' : 'Корзина пустая'}
                        description={isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'}
                        image={isOrderComplete ? 'img/complete-order.jpg' : 'img/empty-cart.jpg'} />
                )}

            </div>
        </div>
    );
}
export default Drawer;
