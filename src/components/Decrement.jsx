import { GrSubtractCircle } from "react-icons/gr";

const Decrement = ({ count, onSelect }) => {
  return (
    <button disabled={count == 0} onClick={() => onSelect()}>
      <GrSubtractCircle className="text-white" />
    </button>
  );
};

export default Decrement;
