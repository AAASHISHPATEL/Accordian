// import useLocalStorage from "./useLocalStorage"
import { useEffect, useState } from 'react';
import './theme.css'
localStorage.setItem("theme",JSON.stringify("light"));
export default function DarkLightMode() {
  // const [theme, setTheme] = useLocalStorage("theme", "dark");
  // localStorage.setItem("theme",JSON.stringify("light"));
  
  const [theme, setTheme]=useState(localStorage.getItem("theme"));
// localStorage.getItem(theme);
// const tem=localStorage.getItem("theme");
// setTheme(tem);

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  useEffect(()=>{
    localStorage.setItem("theme",JSON.stringify(theme));
  },[theme])

  console.log(theme);
  

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World !</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
}