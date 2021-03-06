import React from "react";
import Counter from "../components/Counter";
import { useDispatch } from 'react-redux';
import { incrementCount, decrementCount } from "../actions/counterActions";

const CounterContainer = () => {
  let count = 0
  const dispatch = useDispatch(); 

  const increment = () => {
    dispatch(incrementCount())
    debugger
  };

  const decrement = () => {
    dispatch(decrementCount())
  };

  return (
    <Counter
      value={count}
      onIncrement={increment}
      onDecrement={decrement}
    />
  )
}

export default CounterContainer