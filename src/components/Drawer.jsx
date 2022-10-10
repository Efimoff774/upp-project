function Drawer() {
    return (
        <div style={{ display: 'none' }} className="overlay">
            <div className="drawer">
                <h2>Корзина <img className="delete" src="/img/delete.svg" alt="delete"></img></h2>

                <div className="items">
                    <div className="CartItem d-flex align-center mb-20">
                        <img className="mr-20" width={80} height={90} src="/img/cases/3.jpg" alt=""></img>
                        <div>
                            <p className="mb-5">Appa AirPods 1/2</p>
                            <b>700 ₽</b>
                        </div>
                        <img className="delete" src="/img/delete.svg" alt="delete"></img>
                    </div>

                    <div className="CartItem d-flex align-center mb-20">
                        <img className="mr-20" width={80} height={90} src="/img/cases/3.jpg" alt=""></img>
                        <div>
                            <p className="mb-5">Appa AirPods 1/2</p>
                            <b>700 ₽</b>
                        </div>
                        <img className="delete" src="/img/delete.svg" alt="delete"></img>
                    </div>
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