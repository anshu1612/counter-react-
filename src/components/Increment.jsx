import { IoMdAddCircleOutline } from "react-icons/io";

const Increment = ({ onSelect }) => {
  return (
    <button onClick={() => onSelect()}>
      <IoMdAddCircleOutline className="text-white" />
    </button>
  );
};

export default Increment;
