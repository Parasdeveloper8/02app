import React from 'react';
import Child from './Child';
const Parent = ()=>{
    const text = "hello from child";
    return (
        <>
        <p>Hello from Parent</p>
    <Child data={text}/>
    </>
    )
}
export default Parent;