import React, { useEffect, useState } from 'react';
import '../App.css';

const Counter4 = () => {
  const [count, setCount] = useState(new Set([1]));

  useEffect(() => {
    console.log("rendering", count);
  })

  const handleIncreaseCount = () => {
    console.log("Increasing the count", count.size)
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

  useEffect(() => {
    console.log("rendering", count);
  })

  const handleIncreaseCount = () => {
    console.log("Increasing the count", count.size)
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

  useEffect(() => {
    console.log("rendering", count);
  })


  const handleIncreaseCount = () => {
    console.log("Increasing the count", count)
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

  useEffect(() => {
    console.log("rendering", count);
  })

  const handleIncreaseCount = () => {
    console.log("Increasing the count", count)
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

export default Counter4;
// export default Counter5;
// export default Counter6;
// export default Counter7;