import { useSelector } from "react-redux";

export const CartInfo = () => {
  const cart = useSelector();
  return (
    <>
      {cart.map(() => (
        <div></div>
      ))}
    </>
  );
};
