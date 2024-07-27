// /src/components/Counter.tsx

import { useState } from "preact/hooks";

export default function SearchAndResults() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <button onClick={() => setCount(count - 1)} disabled={count === 0}>
        -
      </button>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
