import React, { useEffect, useState } from "react";

function LoadMoreData() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);

  async function fetchProduct() {
    try {
      setLoading(true);
    const response = await fetch(
      `https://dummyjson.com/products?limit=20&skip=${count===0?0:count*20}`
    );
    const result = await response.json();
    // setProduct([...result.products])

    

    if (result && result.products && result.products.length) {
      setProduct((prevData) => [...prevData,...result.products]);
      setLoading(false);
      console.log(result);
    }
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProduct();
  },[count]);

  useEffect(() => {
    if (product && product.length >= 100) {
      setDisable(true);
    }
  }, [product]);

  if(loading){
    return <div>
      <h1>loading! please wait</h1>
    </div>
  }

  return (
    <>
    <div className="gap-4 flex flex-wrap w-full justify-center">
     {
      (product&&product.length)?product.map((item)=><div key={item.id} className="max-w-sm  border-gray-400  border rounded overflow-hidden shadow-lg">
  <img className="w-full" src={item.images[0]} alt={item.thumbnail}/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{item.title}</div>
    <p className="text-gray-700 text-base">
      {item.description}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    {
      item.tag!==0?item.tags.map((tag)=><span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{tag}</span>):null
    }
    
  </div>
</div>):null
     }
    </div>
    <div className="m-5 justify-center text-center">
      <button disabled={disable}  onClick={()=>setCount(count+1)} className="border border-black px-2 rounded ">Load More Product</button>
      {disable?<p>You reached to upper limit</p>:null}
     </div>
     </>
    
  );
}

export default LoadMoreData;
