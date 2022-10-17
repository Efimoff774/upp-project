function Header(props) {
    return (
        <header className="d-flex justify-between align-center p-30">
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
            <div className="headerRight d-flex">
                <div className="basket mr-30 d-flex align-center cu-p" onClick={props.onClickBasket}>
                    <img className="mr-5" width={25} height={25} src="/img/basket.svg" alt="basket" />
                    <span >1205 ₽</span>
                </div>
                <img width={25} height={25} src="/img/profile.svg" alt="profile" />
            </div>
        </header>
    );
}

export default Header;