import React, { useState } from 'react';
import '../App.css';

const Counter1 = () => {
  const [count, setCount] = useState(0);

  const handleIncreaseCount = () => {
    setTimeout(() => {
      console.log("Increasing count", count);
      setCount(count + 1);
    }, 1000)
  }

  return (
    <div className='container'>
      <h2>The count is: {count}</h2>
      <button type="button" onClick={handleIncreaseCount}>Increase count</button>
    </div>
  )
}

const Counter2 = () => {
  const [count, setCount] = useState(0);

  const handleIncreaseCount = () => {
    console.log("Increasing count", count);
    setCount(count + 1);
    console.log("Increasing count again", count);
    setCount(count + 1);
    console.log("Increasing count again again", count);
    setCount(count + 1);
  }

  return (
    <div className='container'>
      <h2>The count is: {count}</h2>
      <button type="button" onClick={handleIncreaseCount}>Increase count</button>
    </div>
  )
}

const Counter3 = () => {
  const [count, setCount] = useState(0);

  const handleIncreaseCount = () => {
    setCount((prevState) => {
      console.log("Increasing count", prevState);
      return prevState + 1;
    });
    setCount((prevState) => {
      console.log("Increasing count again", prevState);
      return prevState + 1;
    });
    setCount((prevState) => {
      console.log("Increasing count again again", prevState);
      return prevState + 1;
    });
  }

  return (
    <div className='container'>
      <h2>The count is: {count}</h2>
      <button type="button" onClick={handleIncreaseCount}>Increase count</button>
    </div>
  )
}

export default Counter1;
// export default Counter2;
// export default Counter3;