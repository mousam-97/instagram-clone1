import { useDispatch, useSelector } from "react-redux";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Popup from "./components/Popup";
import { useEffect } from "react";
import { fetchItems } from "./store/actions/photosActions";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Newsfeed from "./components/Newsfeed";

function App() {
  const item = useSelector((state) => state.photos);
  const {selectedItem} = item;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  return (
    <div className="App">
      {selectedItem.id && <Popup {...selectedItem}/>}

      <Header />
      <Routes>

        <Route path="/profile" element={<Gallery />} />
        <Route path="/" element={<Newsfeed />} />
      </Routes>

    </div>
  );
}

export default App;
