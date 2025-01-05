import { useState } from "react";

function Component() {
  const [click, setClick] = useState("He");
  const [number, setNumber] = useState(3);
  const [list, setList] = useState<string[]>([]);
  return (
    <div>
      <h2 className="mb-1">React & Typescript</h2>
      <button
        className="btn btn-center"
        onClick={() => {
          // setClick("typescript");
          setNumber(32);
          // setNumber("dd");
          setList(["dd", "aa"]);
        }}
      >
        Click Me
      </button>
    </div>
  );
}
export default Component;
