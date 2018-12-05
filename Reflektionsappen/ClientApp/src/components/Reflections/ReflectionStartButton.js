import React from "react";

export default function ReflectionStartButton(props) {
  return (
      <div className='reflection-start-button'>
        <button className=''>
          <div>{props.children.header}</div>
          <div>{props.children.description}</div>
        </button>
      </div>
  )
}
