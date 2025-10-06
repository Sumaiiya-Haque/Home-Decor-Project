import React, { useState } from "react";
import useProducts from "../Hooks/useProducts";
import ProductCard from "../Components/ProductCard";

const Products = () => {
  const [search,setSearch] = useState('');
  const { products } = useProducts();
  return (
    <div>
      <div className="flex justify-between items-center py-5 ">
        <h1 className="text-3xl font-semibold">
          All Products{" "}
          <span className="text-sm text-gray-500">
            ({products.length})Products Found
          </span>
        </h1>
        <label className="input">
          
          <input
          value={search}
          onChange={(e)=>setSearch(e.target.value)} type="search" placeholder="Search Products" />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
