import React, { useState,useEffect } from 'react'

function ColorPicker() {

  const [color,setColor]=useState("#FFFFFF");
  const [colorType,setColorType] =useState('hex');
  useEffect(() => {
    if (colorType === "rgb") handleRgb();
    else handleHex();
  }, [colorType]);

  const handleHex=()=>{
    const set=["A","B","C","D","E","F","1","2","3","4","5","6","7","8","9","0"];
    let hexCode="#";
    for(let i=0;i<6;i++){
      hexCode+=set[Math.floor(Math.random()*16)]
    }
    setColor(hexCode);
  }

  const handleRgb=()=>{
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    setColor(`rgb(${r},${g},${b})`);
  }
  return (
    <>
    <div className='w-full  text-center bg-slate-500 rounded-b-xl p-4'>      
      <button className=' p-2 mx-3 border rounded-xl border-zinc-900 ' onClick={()=>setColorType('hex')}>Hex</button>
      <button className=' p-2 mx-3 border rounded-xl border-zinc-900 'onClick={()=>setColorType('rgb')}>rgb</button>
      <button className=' p-2 mx-3 border rounded-xl border-zinc-900 ' onClick={colorType==='hex'?()=>handleHex():()=>handleRgb()}>Pick Color</button>
    </div>
    <div className='text-center border rounded-xl m-20 p-2' style={{backgroundColor:color}}>
      <h1 className='from-neutral-800 font-extrabold text-5xl font-sans my-28'>{colorType==='hex'?"Hex":"Rgb"} Color</h1>
      <h2 className='from-neutral-800 font-extrabold text-5xl font-sans my-28'>Code={color}</h2>
    </div>
    </>
  )
}

export default ColorPicker
