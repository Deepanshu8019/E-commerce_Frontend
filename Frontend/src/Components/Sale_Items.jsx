import React, { useEffect, useState } from 'react';
import Products from './Products';

function Sale_Items() {

  const apiURL = "http://localhost:4000/";
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(apiURL);
      const data = await res.json();
      // console.log(data);
      setProducts(data.Sale);
    } catch (error) {
      console.log("Something Went Wrong ...");
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Products products={products} />
    </div>
  );
}

export default Sale_Items;
