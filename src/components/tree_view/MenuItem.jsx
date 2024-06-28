import React, { useState } from 'react'
import MenuList from './MenuList'

function MenuItem({item}) {
  
  // const []=useState(false)


  return (
    <li>
      <h1>{item.label}</h1>
      {
        (item && item.children && item.children.length)?(<MenuList list={item.children}/>):null 
      }
    </li>
  )
}

export default MenuItem
