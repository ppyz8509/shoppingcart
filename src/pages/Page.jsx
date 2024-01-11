import React from "react";
import { useSelector } from "react-redux";
import Home from "../pages/Home";
import MyCart from "../pages/MyCart";


const Page = () => {
  const page = useSelector((state) => state.pages);
  //const page = {home:false};
return (
  <div>
    {page.home ? <Home /> : <MyCart />}
  </div>
)
}

export default Page;