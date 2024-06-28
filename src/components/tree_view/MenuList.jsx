import React from 'react'
import MenuItem from './MenuItem'


function MenuList({list=[]}) {
  
  return (
    <ul>
      {
        (list && list.length)?list.map((listItem)=>(<MenuItem list={listItem} key={listItem.label}/>)):null
      }
    </ul>
  )
}

export default MenuList
