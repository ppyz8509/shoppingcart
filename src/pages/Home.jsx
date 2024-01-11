import React from "react";
import AddProduct from "../components/AddProduct"
import { useSelector } from "react-redux";
import Productitem from "../components/Productitem";
const Home = () => {
  const products = useSelector((state) => state.products); //sub เห็นข้อมูล และถ้าข้อมูลเปลี่ยนแปลงก็จะเอาข้อมูลปัจจุบัน

return (
  <div >
      <main className="py-8 max-w-7xl mx-auto px-4 ">
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-8">
              <div className="col-span-2">
                  <div className="grid md:grid-cols-2 gap-y-10 grid-cols-1 ">
                  {products.length ? 
                  products.map((p,i)=>{
                      return <Productitem product={p} key={i} />;
                  }) : (
                  <div>No Product Found</div>
                  )}
                   </div>
                   </div>
                  <div>
                   <AddProduct/>
                  </div>
          </div>
      </main>
  </div>
)
}

export default Home