import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
// import ScrollBar from './components/ScrollBar_indicater/ScrollBar'
import GithubProfilePicker from './components/GithubProfilePicker'
// import ColorPicker from './components/ColorPicker.jsx'
// import StarRating from './components/StarRating.jsx'
// import ImageSlider from './components/image_slider/ImageSlider.jsx'
// import LoadMoreData from './components/LoadMoreData.jsx'
// import MenuList from './components/tree_view/MenuList'
// import menus from './components/tree_view/data'
// import QRCodeGenerator from './components/QrCodeGenerater'
// import DarkLightMode from './components/themeChanger/DarkLightMode'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ColorPicker/> */}
    {/* <StarRating noOfStar={10}/> */}
    {/* <ImageSlider 
     url={"https://picsum.photos/v2/list"}
    /> */}
    {/* <LoadMoreData/> */}
    {/* <MenuList list={menus}/> */}
    {/* <QRCodeGenerator/> */}
     {/* <DarkLightMode/> */}
     {/* <ScrollBar url={'https://dummyjson.com/products?limit=100'}/> */}

     <GithubProfilePicker/>
    
  </React.StrictMode>
)
