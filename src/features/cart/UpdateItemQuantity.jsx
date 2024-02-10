import React from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

const UpdateItemQuantity = ({ pizzaId, currentQuantity }) => {
  const dispatch = useDispatch();
  const handleDecreaseQuantity = () => {
    dispatch(decreaseItemQuantity(pizzaId));
  };

  const handleIncreaseQuantity = () => {
    dispatch(increaseItemQuantity(pizzaId));
  };

  return (
    <div className="flex gap-1 items-center md:gap-2">
      <Button type="round" onClick={handleDecreaseQuantity}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button type="round" onClick={handleIncreaseQuantity}>
        +
      </Button>
    </div>
  );
};

export default UpdateItemQuantity;
