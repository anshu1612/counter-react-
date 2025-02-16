import Counter from "./components/Counter";
import { useState } from "react";
import Increment from "./components/Increment";
import Decrement from "./components/Decrement";
import Reset from "./components/Reset";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-900 overflow-hidden">
        <div className="bg-black p-10 w-5/6 rounded-3xl">
          <Counter count={count}></Counter>
          <div className="flex justify-around text-4xl">
            <Increment onSelect={() => setCount(count + 1)} />
            <Reset onSelect={() => setCount(0)} />
            <Decrement count={count} onSelect={() => setCount(count - 1)} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
