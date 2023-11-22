import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from "./redux/counterSlice";

const App = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <h1>Redux CreateAPI Demo</h1>

      <h1>{count}</h1>

      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>+1</button>
      <button onClick={() => dispatch(incrementByAmount(3))}>+3</button>
    </div>
  );
};

export default App;
