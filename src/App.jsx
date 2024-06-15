import { useState } from "react";
import data from "./data.js";

function App() {
  const [selected, setSelelcted] = useState(null);
  const [Multiselection, setMultiselection]=useState([]);
  const [enable,setEnable]=useState(false);

  const handleSingleSelection=(id)=>{
    selected===id?setSelelcted(null):setSelelcted(id);
  }
  const handleMultiSelection=(id)=>{
    let prev=[...Multiselection];
    if(prev.indexOf(id)!==-1){
     prev.splice(prev.indexOf(id),1);
    }else{
      prev.push(id);
    }
    setMultiselection(prev);
  }

  return (
   <section className="mx-auto max-w-7xl px-2 py-10 md:px-0">
  <div>
    <div className="mx-auto max-w-2xl lg:text-center">
      <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
        Accordian
      </h2>
      <div className="mx-60 mt-5  bg-slate-400 rounded" onClick={()=>setEnable(!enable)} >
        <button className="p-1">{enable===true?`Disable`:`Enable`} Multiselection</button>
        </div>
      
    </div>
    <div className="mx-auto mt-5 max-w-3xl space-y-4 md:mt-10">
      
      {
      data.map((dataItem)=>(
        <div key={dataItem.id} className="cursor-pointer rounded-md border border-gray-400 shadow-lg transition-all duration-200">
        <button onClick={enable===false?()=>handleSingleSelection(dataItem.id):()=>(handleMultiSelection(dataItem.id))}
          type="button"
          className="flex w-full items-center justify-between px-4 py-5 sm:p-6">
        
          <span className="flex text-lg font-semibold text-black">
          {dataItem.question}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-5 w-5 text-gray-500"
          >
            <polyline points={selected===dataItem.id?"18 15 12 9 6 15":"6 9 12 15 18 9"}></polyline>
          </svg>
        </button>
        {
        
       enable===false?(selected===dataItem.id?<div className="px-4 pb-5 sm:px-6 sm:pb-6">
           <p className="text-gray-500">
             {dataItem.answer}
           </p>
         </div>:null):(Multiselection.indexOf(dataItem.id)!==-1?<div className="px-4 pb-5 sm:px-6 sm:pb-6">
           <p className="text-gray-500">
             {dataItem.answer}
          </p>
        </div>:null)
        }
      </div>
      ))}

     
     
    </div>
   
  </div>
</section>

  )
}

export default App;
