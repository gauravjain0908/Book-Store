import React from 'react'

function NestedComponent() {
    return (
        <div>

            <h1> This is a parent component</h1>
            <Child />  {/* I have called the child component her */}
            
        </div>
    )
}

  const Child = () => { // this is the child function component 

    return (

        <dev>
            <h3> I am the kid </h3>
        </dev>
    )
  } 

export default NestedComponent
