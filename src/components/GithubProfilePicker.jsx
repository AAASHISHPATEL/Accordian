import React, { useEffect, useState } from 'react'
// import {a} from "react-router-dom"



function GithubProfilePicker() {

  const [loading,setLoading]=useState(false);
  const [profile,setProfile]=useState([]);
  const [userName,setUserName]=useState("a");
  const [input,setInput]=useState("");

  async function fetchProfile(){
    try {
      setLoading(true);
      const response= await fetch(`https://api.github.com/users/${userName}`);
      const data=await response.json();

      if(data){
        console.log(data);
        setProfile(data);
        setLoading(false);
      }
      
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    
    }
  }


useEffect(()=>{
  fetchProfile();
},[userName])


if(loading){
  return <h1>Loading ! please Wait...</h1>
}



  return (
    
      
<div className='flex flex-col items-center justify-center min-h-screen from-gray-700 via-gray-800 to-gray-900 bg-gradient-to-br'>
<div className="relative w-full group max-w-md min-w-0 mx-auto mt-6 mb-6 break-words bg-white border shadow-2xl dark:bg-gray-800 dark:border-gray-700 md:max-w-sm rounded-xl">
    <div className="pb-6">
        <div className="flex flex-wrap justify-center">
            <div className="flex justify-center w-full">
                <div className="relative">
                    <img src={profile.avatar_url} alt='' className="dark:shadow-xl border-white dark:border-gray-800 rounded-full align-middle border-8 absolute -m-16 -ml-18 lg:-ml-16 max-w-[150px]" />
                </div>
            </div>
        </div>
        <div className="mt-2 mt-20 text-center">
            <h3 className="mb-1 text-2xl font-bold leading-normal text-gray-700 dark:text-gray-300">{(profile.login)}</h3>
            <div className="flex flex-row justify-center w-full mx-auto space-x-2 text-center">
               
                <div className="text-sm font-bold tracking-wide text-gray-600 dark:text-gray-300 font-mono text-xl">{profile.name}</div>
                {/* <!-- End: /typography/_h3.antlers.html --> */}
            </div>
            <div className="w-full text-center">
                <div className="flex justify-center pt-8 pb-0 lg:pt-4">
                    <div className="flex space-x-2">
  

                        <a className="p-1 -m-1 text-gray-400 hover:text-amber-500 focus:outline-none focus-visible:ring-2 ring-primary" href={profile.html_url} rel="noopener" aria-label="Ariel Cerda on Github" target="_blank">
                            <svg className="w-6 h-6 overflow-visible fill-current" alt="" aria-hidden="true" viewBox="0 0 140 140">
                                <path
                                    d="M70 1.633a70 70 0 00-21.7 136.559h1.692a5.833 5.833 0 006.183-6.184v-1.225-6.358a2.917 2.917 0 00-1.167-1.925 2.917 2.917 0 00-2.45-.583C36.925 125.3 33.6 115.5 33.367 114.858a27.067 27.067 0 00-10.034-12.775 6.767 6.767 0 00-.875-.641 3.675 3.675 0 012.217-.409 8.575 8.575 0 016.708 5.134 17.5 17.5 0 0023.334 6.766 2.917 2.917 0 001.691-2.1 11.667 11.667 0 013.267-7.175 2.917 2.917 0 00-1.575-5.075c-13.825-1.575-27.942-6.416-27.942-30.275a23.333 23.333 0 016.125-16.216A2.917 2.917 0 0036.808 49a20.533 20.533 0 01.059-14 32.317 32.317 0 0114.7 6.708 2.858 2.858 0 002.45.409A61.892 61.892 0 0170 39.958a61.075 61.075 0 0116.042 2.159 2.858 2.858 0 002.391-.409 32.608 32.608 0 0114.7-6.708 20.825 20.825 0 010 13.883 2.917 2.917 0 00.525 3.092 23.333 23.333 0 016.125 16.042c0 23.858-14.175 28.641-28.058 30.216a2.917 2.917 0 00-1.575 5.134 12.833 12.833 0 013.558 10.15v18.55a6.183 6.183 0 002.1 4.841 7 7 0 006.184 1.109A70 70 0 0070 1.633z"
                                ></path>
                            </svg>
                        </a>

 
                       
                    </div>
                </div>
            </div>
        </div>
        <div className="pt-6 mx-6 mt-6 text-center border-t border-gray-200 dark:border-gray-700/50">
            <div className="flex flex-wrap justify-center">
                <div className="w-full px-6">
                   <h1 className='font-bold  text-gray-300  '>Joined on : {profile.created_at}</h1>
                   <h1 className='font-bold  text-gray-300  '>Repository : {profile.public_repos}</h1>
                  <h1 className='font-bold  text-gray-300  '>Followers : {profile.followers}</h1>
                   <h1 className='font-bold  text-gray-300  '>Following : {profile.following}</h1>
                    
                </div>
            </div>
        </div>
        <div className="relative h-6 overflow-hidden translate-y-6 rounded-b-xl">
            <div className="absolute flex -space-x-12 rounded-b-2xl">
                <div className="w-36 h-8 transition-colors duration-200 delay-75 transform skew-x-[35deg] bg-amber-400/90 group-hover:bg-amber-600/90 z-10"></div>
                <div className="w-28 h-8 transition-colors duration-200 delay-100 transform skew-x-[35deg] bg-amber-300/90 group-hover:bg-amber-500/90 z-20"></div>
                <div className="w-28 h-8 transition-colors duration-200 delay-150 transform skew-x-[35deg] bg-amber-200/90 group-hover:bg-amber-400/90 z-30"></div>
                <div className="w-28 h-8 transition-colors duration-200 delay-200 transform skew-x-[35deg] bg-amber-100/90 group-hover:bg-amber-300/90 z-40"></div>
                <div className="w-28 h-8 transition-colors duration-200 delay-300 transform skew-x-[35deg] bg-amber-50/90 group-hover:bg-amber-200/90 z-50"></div>
            </div>
        </div>
    </div>
</div>


<div >
  <div className="rounded-2xl bg-white px-6 pt-6 pb-6 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:px-10">
    <div className="mx-auto max-w-md">


      <div   className="relative mx-auto w-max">
        <input type="search"
        onChange={(event)=>setInput(event.target.value.trim())}

        onKeyDown={(e)=>{
          if(e.key==="Enter" && input!==""){
            setUserName(input);
            setInput("");
          }
        }}
        
        placeholder='Search UserName'
        value={input} 
              className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-lime-300 focus:pl-16 focus:pr-4" />
        
          <svg
        
        xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        
      </div>


    </div>
  </div>
</div>

</div>
    // </div>
  )
}

export default GithubProfilePicker
