import React, { useEffect, useState } from 'react'

function ScrollBar({url}) {

  const [data,setData]=useState();
  const [loading,setLoading]=useState(false);
  const [scrollPercentage,setScrollPercentage]=useState(0);

  async function fetchData(url){
    try {

      setLoading(true);

      const response=await fetch(url);
      const result = await response.json();
      (result && result.products && result.products.length)?setData(result.products):null;
      setLoading(false);

      
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(()=>{
    fetchData(url);
  },[url]);

  function handleScrollPercentage(){
    // console.log(
    //   document.body.scrollTop,
    //   document.documentElement.scrollTop,
    //   document.documentElement.scrollHeight,
    //   document.documentElement.clientHeight
    // );

    const howMuchScrolled=document.body.scrollTop ||document.documentElement.scrollTop;


    const height = document.documentElement.scrollHeight- document.documentElement.clientHeight;

    const percentage=(howMuchScrolled/height)*100;
    setScrollPercentage(percentage);
  }

  useEffect(()=>{
    window.addEventListener("scroll" , handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  },[]);


// loading?console.log("loding...."):console.log(data);





  return (
    <div>
      <div className=" justify-center text-center w-full">
        <h1 className='bg-lime-600 py-2 rounded-b-xl fixed top-0 w-full'>Custom Scroll Indicator</h1>
        
          <div
            className=" h-[10px] bg-red-500 fixed top-0 rounded-r-md"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        
      </div>
      <div className=" text-center mx-16">
        {data && data.length > 0
          ? data.map((dataItem) =><div><img src={dataItem.thumbnail}/> <p key={dataItem.id}   className=' my-2 py-1 bg-slate-500 rounded-md'>{dataItem.title}</p></div>)
          : null}
      </div>
    </div>
  )
}

export default ScrollBar
