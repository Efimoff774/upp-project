import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [
  { title: 'Чехол Сейлор Мун AirPods 1/2', price: 800, imageURL: '/img/cases/1.jpg' },
  { title: 'Чехол Kaonashi AirPods 1/2', price: 800, imageURL: '/img/cases/2.jpg' },
  { title: 'Чехол Appa 1/2', price: 800, imageURL: '/img/cases/3.jpg' },
  { title: 'Чехол Naruto 1/2', price: 800, imageURL: '/img/cases/4.jpg' },

]

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content">
        <div className="d-flex align-center justify-between mb-30">
          <h1>Все кейсы</h1>
          <div className="search-block d-flex align-center">
            <img src="/img/search.svg" alt="Search"></img>
            <input placeholder="Кейсы, принты"></input>
          </div>
        </div>
        <div className="d-flex">
          {arr.map(obj => <Card title={obj.title} price={obj.price} imageURL={obj.imageURL} fck={obj} />)}
        </div>
      </div>
    </div>
  );
}
export default App;
