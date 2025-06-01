import React, { useEffect, useRef, useState } from 'react';
import '../App.css';
import Todo1 from '../Todo/Todo.tsx';
import BuyCard1 from '../BuyCard/BuyCard.tsx';
import Button from '../BuyCard/Button.tsx';

const Counter8 = () => {
  const [count, setCount] = useState(0);
  
  const handleIncreaseCount = () => {
    setCount((prevState) => prevState + 1);
  }

  useEffect(() => {
    console.log("rendering container", count);
  });

  return (
    <div className='container'>
      <h2>The count is: {count}</h2>
      <Button text="Increase count" handleOnClick={handleIncreaseCount} />
      <BuyCard1 />
    </div>
  )
}

const CounterSection = () => {
  const [count, setCount] = useState(0);

  const handleIncreaseCount = () => {
    setCount((prevState) => prevState + 1);
  }

  return (
    <>
    <h2>The count is: {count}</h2>
    <Button text="Increase count" handleOnClick={handleIncreaseCount} />
    </>
  )

}

const Counter9 = () => {
  useEffect(() => {
    console.log("rendering container");
  })
  return (
    <div className='container'>
      <CounterSection />
      <BuyCard1 />
    </div>
  )
}

const Counter10 = () => {
  const count = useRef(0);

  const handleIncreaseCount = () => {
    count.current += 1;
    // --> fire tracking function with updated count
    console.log(count.current, "COUNT")
  }

  useEffect(() => {
    console.log("rendering container");
  });

  return (
    <div className='container'>
      <h2>Container</h2>
      <Button text="Increase count" handleOnClick={handleIncreaseCount} />
      <BuyCard1 />
    </div>
  )
}

export default Counter8;
// export default Counter9;
// export default Counter10;
