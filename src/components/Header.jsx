import { Link } from 'react-router-dom'
import React from 'react';
import AppContext from '../context';



function Header(props) {
    const { itemsInCart } = React.useContext(AppContext)

    const totalPrice = itemsInCart.reduce((sum, obj) => obj.price + sum, 0)


    return (
        <header className="d-flex justify-between align-center p-30">
            <Link to='/'>
                <div className="headerLeft d-flex align-center">
                    <img width={50} height={50} src="/img/logoPods.svg" alt="logo" className="mr-10" />
                    <div>
                        <h3 >
                            CustomPods
                        </h3>
                        <p>
                            Чехлы для AirPods
                        </p>
                    </div>
                </div>
            </Link>
            <div className="headerRight d-flex align-center">
                <div className="basket mr-30 d-flex align-center cu-p" onClick={props.onClickBasket}>
                    <img className="mr-5" width={25} height={25} src="/img/basket.svg" alt="basket" />
                    <span >{totalPrice} ₽</span>
                </div>
                <Link to='favorites'>
                    <img width={18} height={18} src="/img/favorite.svg" alt="favorite" />
                </Link>
                <Link to='orders'>
                    <img className="ml-20" width={25} height={25} src="/img/profile.svg" alt="profile" />

                </Link>
            </div>
        </header>
    );
}

export default Header;