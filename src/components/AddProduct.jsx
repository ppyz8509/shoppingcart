import React from 'react'
import {useForm} from "react-hook-form"
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/products/action';




const AddProduct = () => {
    const dispatch = useDispatch();
    const {
      register,
      handleSubmit,
      watch,
      reset,
      formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        dispatch(addProduct(data))
        reset()
    }

    return (
      <div className="formContainer">
        <h4 className="formTitle">Add New Product</h4>
        <form
          className="space-y-4 text-[#534FAF]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="space-y-2">
            <label>Product Name </label>
            <input
              type="text"
              className="addProductInput"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500">Product Name is required</span>
            )}
          </div>
          <div className="space-y-2">
            <label>Category</label>
            <select
              className="addProductInput"
              {...register("category", { required: true })}
            >
              {errors.category && <span>Category is required</span>}
              <option value="">Select a category</option>
              <option value="clothing">Clothing</option>
              <option value="gadgets">Gadgets</option>
              <option value="bags">Bags</option>
            </select>
          </div>
          <div className="space-y-2">
            <label>Image URL</label>
            <input
              type="text"
              className="addProductInput"
              {...register("image", { required: true })}
            />
            {errors.image && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label>Price</label>
              <input
                type="number"
                className="addProductInput"
                {...register("price", { required: true, min: 0 })}
              />
              {errors.price && (
                <span className="text-red-500">Pleas enter a valid price.</span>
              )}
            </div>
            <div className="space-y-2">
              <label>Quantity</label>
              <input
                type="number"
                className="addProductInput"
                id="1ws-inputQuantity"
                {...register("quantity", { required: true, min: 0 })}
              />
              {errors.quantity && (
                <span className="text-red-500">
                  Pleas enter a valid Quantity.
                </span>
              )}
            </div>
          </div>
          <button type="submit" className="submit bg-indigo-600 text-white">
            Add Product
          </button>
        </form>
      </div>
    );
  };
  export default AddProduct;