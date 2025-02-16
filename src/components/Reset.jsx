import { RiResetRightLine } from "react-icons/ri";

const Reset = ({ onSelect }) => {
  return (
    <button onClick={() => onSelect()}>
      <RiResetRightLine className="text-white" />
    </button>
  );
};

export default Reset;
