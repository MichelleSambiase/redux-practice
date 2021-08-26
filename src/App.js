import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import { actions } from "./store/index";

import "./App.css";
function App() {
  const state = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney } = bindActionCreators(actions, dispatch);

  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={() => depositMoney(1000)}>Desposit</button>
      <button onClick={() => withdrawMoney(1000)}>withdraw</button>
    </div>
  );
}

export default App;
