import React from 'react';

const Counter = () => {
  const [count, setCount] = React.useState(0);

  // *
  const increment = () => setCount(count + 1);

  return (
    <div>
      <p style={{ textAlign: 'center' }}>{count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
