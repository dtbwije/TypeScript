import React from 'react';

function Counter({ initialCount }) {
  const [count, setCount] = React.useState(initialCount);

  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <button
        onClick={() => {
          setCount(count + 1);
          // setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
          // setCount(prevCount => prevCount + 1);
        }}
      >
        Increment (Functional Updater)
      </button>
    </>
  );
}
export default Counter;
