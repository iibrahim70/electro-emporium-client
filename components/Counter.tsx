import { useCallback } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

interface CounterProps {
  quantity: number;
  setQuantity: (quantity: number) => void;
}
const Counter: React.FC<CounterProps> = ({ quantity, setQuantity }) => {
  const handleDecrease = useCallback(() => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      return null;
    }
  }, [quantity, setQuantity]);

  const handleIncrease = useCallback(() => {
    setQuantity(quantity + 1);
  }, [quantity, setQuantity]);

  return (
    <div className="grid grid-cols-3 gap-0 rounded-lg overflow-hidden border border-dark">
      <button
        onClick={handleDecrease}
        className="flex justify-center items-center hover:bg-dark hover:text-light duration-300 ease-in-out bg-dark/10"
      >
        <AiOutlineMinus />
      </button>
      <span className="flex justify-center items-center border-l border-r border-dark">
        {quantity}
      </span>
      <button
        onClick={handleIncrease}
        className="flex justify-center items-center hover:bg-dark hover:text-light duration-300 ease-in-out bg-dark/10"
      >
        <AiOutlinePlus />
      </button>
    </div>
  );
};

export default Counter;
