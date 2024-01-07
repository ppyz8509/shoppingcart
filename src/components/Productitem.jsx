import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/carts/action";
import { removeQuantity } from "../redux/products/action";

const Productitem = ({ product }) => {
  const dispatch = useDispatch();
  const { id, image, name, category, price, quantity } = product;
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    dispatch(removeQuantity(id));
  };
  return (
    <div className="card md:w-96 bg-base-100 shadow-xl">
      <figure className="relative">
        <img src={image} alt={name} className="h-80 w-fill" />
        <div className="badge badge-secondary absolute top-3 right-3">
          {category}
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>

        <p>
        พบกับสิ้นค้าร้าน Naphat Shop
        </p>

        <div className="flex justify-bewteen">
          <p className="w-full">เหลืออยู่ : {quantity}</p>
          <p className="text-left">{price}</p>
        </div>
        <div className="card-action mt-2">
          <button
            className="btn btn-sm btn-primaty"
            disabled={quantity === 0}
            onClick={handleAddToCart}
          >
            {" "}
            buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Productitem;