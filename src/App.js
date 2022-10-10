import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
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
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

      </div>
    </div>
  );
}

export default App;
