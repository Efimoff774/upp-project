
function App() {
  return (
    <div className="wrapper clear">
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
        <h1 className="mb-30">Все кейсы</h1>
        <div className="d-flex">
          <div className="card">
            <img width={150} height={168} src="/img/cases/1.jpg" alt="Фотография чехла"></img>
            <p>Чехол Сейлор Мун AirPods 1/2</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена</span>
                <b>700 ₽</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/btn_passive.svg" alt="Plus"></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img width={150} height={168} src="/img/cases/2.jpg" alt="Фотография чехла"></img>
            <p>Чехол Сейлор Мун AirPods 1/2</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена</span>
                <b>700 ₽</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/btn_passive.svg" alt="Plus"></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img width={150} height={168} src="/img/cases/3.jpg" alt="Фотография чехла"></img>
            <p>Чехол Сейлор Мун AirPods 1/2</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена</span>
                <b>700 ₽</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/btn_passive.svg" alt="Plus"></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img width={150} height={168} src="/img/cases/4.jpg" alt="Фотография чехла"></img>
            <p>Чехол Сейлор Мун AirPods 1/2</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена</span>
                <b>700 ₽</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/btn_passive.svg" alt="Plus"></img>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
