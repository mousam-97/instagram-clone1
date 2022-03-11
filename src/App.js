import { useDispatch, useSelector } from "react-redux";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Popup from "./components/Popup";
import data from "./data.js";
import { useEffect } from "react";
import { fetchItems } from "./store/actions/photosActions";

function App() {
  const items = useSelector((state) => state.photos.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  return (
    <div className="App">
      {data.map((item) => {
        return item.open && <Popup item={item} />;
      })}
      {/* <Popup /> */}
      <Header />
      <Gallery />

    </div>
  );
}

export default App;
