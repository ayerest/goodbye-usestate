import React, { useRef, useState } from 'react';
import '../App.css';
import Todo1 from '../Todo/Todo.tsx';
import BuyCard1 from '../BuyCard/BuyCard.tsx';
import Button from '../BuyCard/Button.tsx';

const Counter1 = () => {
  const [count, setCount] = useState(0);

  const handleIncreaseCount = () => {
    setTimeout(() => {
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
    setCount(count + 1);
    setCount(count + 1);
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
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
  }

  return (
    <div className='container'>
      <h2>The count is: {count}</h2>
      <button type="button" onClick={handleIncreaseCount}>Increase count</button>
    </div>
  )
}

const Counter4 = () => {
  const [count, setCount] = useState(new Set([1]));

  const handleIncreaseCount = () => {
    setCount(count.add(count.size + 1))
  }

  return (
    <div className='container'>
      <h2>The count is: {count.size}</h2>
      <button type="button" onClick={handleIncreaseCount}>Increase count</button>
    </div>
  )
}

const Counter5 = () => {
  const [[count], setCount] = useState([new Set([1])]);

  const handleIncreaseCount = () => {
    setCount([count.add(count.size + 1)])
  }

  return (
    <div className='container'>
      <h2>The count is: {count.size}</h2>
      <button type="button" onClick={handleIncreaseCount}>Increase count</button>
    </div>
  )
}

const Counter6 = () => {
  const [count, setCount] = useState(new Map([["count", 1]]));

  const handleIncreaseCount = () => {
    const currentCount = count.get("count")!;
    setCount(count.set("count", currentCount + 1))
  }

  return (
    <div className='container'>
      <h2>The count is: {count.get("count")}</h2>
      <button type="button" onClick={handleIncreaseCount}>Increase count</button>
    </div>
  )
}

const Counter7 = () => {
  const [[count], setCount] = useState([new Map([["count", 1]])]);

  const handleIncreaseCount = () => {
    const currentCount = count.get("count")!;
    setCount([count.set("count", currentCount + 1)])
  }

  return (
    <div className='container'>
      <h2>The count is: {count.get("count")}</h2>
      <button type="button" onClick={handleIncreaseCount}>Increase count</button>
    </div>
  )
}

const Counter8 = () => {
  const [count, setCount] = useState(0);

  const handleIncreaseCount = () => {
    setCount((prevState) => prevState + 1);
  }

  return (
    <div className='container'>
      <h2>The count is: {count}</h2>
      <Button text="Increase count" handleOnClick={handleIncreaseCount} />
      <Todo1 />
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
  return (
    <div className='container'>
      <CounterSection />
      <Todo1 />
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

  return (
    <div className='container'>
      <Button text="Increase count" handleOnClick={handleIncreaseCount} />
      <Todo1 />
      <BuyCard1 />
    </div>
  )
}

// export default Counter1;
// export default Counter2;
// export default Counter3;
// export default Counter4;
// export default Counter5;
// export default Counter6;
// export default Counter7;
// export default Counter8;
// export default Counter9;
export default Counter10;
