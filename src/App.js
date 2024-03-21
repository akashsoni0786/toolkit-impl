import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { counter } from "./reducers/Slice";

function App() {
  const toolkitData = useSelector((state) => state.myReducer);
  const dispatch = useDispatch();
  console.log("tool",toolkitData.count);
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => dispatch(counter(toolkitData.count+1))}>Click me</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>{toolkitData.count}</p>
      </header>
    </div>
  );
}

export default App;
