function Drawer({ onClick, items = [] }) {

    // Чтобы хранить в пропсах по умолчанию, то надо дестрктуризировать и туда запихивать че захоттим
    return (

        <div className="overlay">

            <div className="drawer">
                <h2>Корзина <img className="delete" src="/img/delete.svg" alt="delete" onClick={onClick}></img></h2>
                <div className="items">
                    {items.map((obj) => (
                        <div className="CartItem d-flex align-center mb-20">
                            <img className="mr-20" width={80} height={90} src={obj.imageURL} alt=""></img>
                            <div>
                                <p className="mb-5">{obj.title}</p>
                                <b>{obj.price}₽</b>
                            </div>
                            <img className="delete" src="/img/delete.svg" alt="delete"></img>
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
                                40 ₽
                            </b>
                        </li>

                        <li >
                            <span >
                                Итого
                            </span>
                            <div>
                            </div>
                            <b>
                                840 ₽
                            </b>
                        </li>
                    </ul>
                    <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="arrow"></img></button>
                </div>
            </div>
        </div>
    );
}
export default Drawer;