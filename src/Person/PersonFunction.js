import React from 'react'

const PersonFunction = (props)=>{
  return <div> 
    <h2>function component</h2> 
     <h3>Hi, I'm {props.name} and I'm {props.age} years old.</h3>
    {props.children} 
  </div>


    }

export default PersonFunction