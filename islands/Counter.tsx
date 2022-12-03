import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.start);

  const [style, setStyle] = useState({});

  const increment = () => {
    setCount(count + 1); 
    setStyle({animation: 'var(--animation-fade-in-bloom) forwards'});
  }

  const decrement = () => {
    setCount(count - 1); 
    setStyle({});
  }

  return (
    <div>
      <p style={style} class="count">{count}</p>
      <Button onClick={decrement}>-1</Button>
      <Button onClick={increment}>+1</Button>
    </div>
  );
}
