import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Popup from "./components/Popup";
import data from "./data.js";


function App() {

  return (
    <div className="App">
      {data.map((item) => {
        return item.open && <Popup item = {item}/> 
      })}
      {/* <Popup /> */}
      <Header />
      <Gallery />

    </div>
  );
}

export default App;
