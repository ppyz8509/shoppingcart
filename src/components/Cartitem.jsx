import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Bill from "./Bill";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/carts/action";
import { addQuantity, removeQuantity } from "../redux/products/action";
import { IoMdClose } from "react-icons/io";

const Cartitem = ({ product }) => {
  const { id, name, image, quantity, category, price, productId } = product;
  const dispatch = useDispatch();
  const [totalItemPrice, setTotalItemPrice] = useState(price * quantity);
 
  useEffect(() => {
    setTotalItemPrice(price * quantity);
  }, [price, quantity]);

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(id));
    dispatch(addQuantity(productId, quantity));
  };

  const handleAddQuantity = () => {
    dispatch(increaseQuantity(id, ));
    dispatch(removeQuantity(productId, ));
  
  };

  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity(id));
    dispatch(addQuantity(productId, 1));
    
  };

  if (quantity === 0 ) {
    handleRemoveFromCart();
  }

  return (
    <div className="rounded-lg">
      <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
        <img
          src={image}
          alt={product}
          className="w-full h-28 rounded sm:w-40"
        />
        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div className="mt-5 sm:mt-0">
            <h3 className="text-lg font-bold text-gray-900">{name}</h3>
            <p className="mt-1 text-sm text-gray-700">Price: {price}฿</p>
            <p className="mt-1 text-sm text-gray-700">Category: {category}</p>
          </div>
        </div>
        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
          <div className="flex item-center border-gray-100">
            <span
              className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-500"
              onClick={handleDecreaseQuantity}
            >
              {"-"}
            </span>
            <input
              type="number"
              min="1"
              value={quantity}
              className="h-8 w-8 border bg-white text-center text-xs outline-none"
            />
            <span
              className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-500"
              onClick={handleAddQuantity}
            >
              {"+"}
            </span>
            <div className="flex items-center space-x-4">
              <p className="text-sm">{totalItemPrice}฿</p>
              <button
                className="lws-removeFromCart"
                onClick={handleRemoveFromCart}
              >
                <IoMdClose />
              </button>
            </div>
          </div>
        </div>
      
      </div>
      <Bill/>
    </div>

    
  );
};

export default Cartitem;
