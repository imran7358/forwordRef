import React,{forwardRef}from "react";
const User = (props, ref) =>{
    return (
      
     <div className="form-container">
     <input type="text" ref={ref}/>
     </div>
      
    )


}


export default forwardRef(User)