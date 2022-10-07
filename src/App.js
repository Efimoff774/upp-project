
function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
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

      <header className="d-flex justify-between align-center p-30">
        <div className="headerLeft d-flex align-center">
          <img width={50} height={50} src="/img/logoPods.svg" className="mr-10" />
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
          <div className="basket mr-30 d-flex align-center">
            <img className="mr-5" width={25} height={25} src="/img/basket.svg" />
            <span >1205 ₽</span>
          </div>
          <img width={25} height={25} src="/img/profile.svg" />
        </div>
      </header>

      <div className="content">
        <div className="d-flex align-center justify-between mb-30">
          <h1>Все кейсы</h1>
          <div className="search-block d-flex align-center">
            <img src="/img/search.svg" alt="Search"></img>
            <input placeholder="Кейсы, принты"></input>
          </div>
        </div>
        <div className="d-flex">
          <div className="card">
            <div className="favourite">
              <img src="/img/liked-active.svg"></img>
            </div>
            <img width={150} height={168} src="/img/cases/1.jpg" alt="Фотография чехла"></img>
            <p>Чехол Сейлор Мун AirPods 1/2</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена</span>
                <b>700 ₽</b>
              </div>
              {/* <button className="button">
                <img width={11} height={11} src="/img/btn_passive.svg" alt="Plus"></img>
              </button> */}
              <div className="plus">
                <img src="/img/btn_passive.svg" alt="Plus"></img>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="favourite">
              <img src="/img/liked-passive.svg"></img>
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
          <div className="card">
            <div className="favourite">
              <img src="/img/liked-passive.svg"></img>
            </div>
            <img width={150} height={168} src="/img/cases/3.jpg" alt="Фотография чехла"></img>
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
          <div className="card">
            <div className="favourite">
              <img src="/img/liked-passive.svg"></img>
            </div>
            <img width={150} height={168} src="/img/cases/4.jpg" alt="Фотография чехла"></img>
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
        </div>

      </div>
    </div>
  );
}

export default App;
