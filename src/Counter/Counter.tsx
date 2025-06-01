import React from 'react';
import CounterClosure from './CounterClosure.tsx';
import CounterSetMap from './CounterSetMap.tsx';
import CounterRerender from './CounterRerender.tsx';

const Counter = () => {
  return (
    <>
      {/* <CounterClosure /> */}
      {/* <CounterSetMap /> */}
      <CounterRerender />
    </>
  )
}

export default Counter;