import "./App.css";
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { loadMore } from "./actions/index";
function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Header />
      <CardContainer />
      <p className="load" onClick={() => dispatch(loadMore())}>
        Load More
      </p>
    </div>
  );
}

export default App;
