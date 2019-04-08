import React from "react";

export function Input(props) {
  // console.log(props);
  return (
    <div className="form-group">
      <label>{props.data}</label>
      <input className="form-control" {...props} 
       />
    </div>
  );
}
