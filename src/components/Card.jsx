function Card() {
    return (
        <div className="card">
            <div className="favourite">
                <img src="/img/liked-passive.svg" alt="liked"></img>
            </div>
            <img width={150} height={168} src="/img/cases/2.jpg" alt="Фотография чехла"></img>
            <p>Чехол Сейлор Мун AirPods 1/2</p>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена</span>
                    <b>700 ₽</b>
                </div>
                <div className="plus">
                    <img src="/img/btn_passive.svg" alt="Plus"></img>
                </div>
            </div>
        </div>
    );
}

export default Card;