 import React from 'react';
 import Grandchild from './grandchild';
const Child = (props) =>{
    const ptext = props.data;
   return (
     <>
     <p>{ptext}</p>
     <Grandchild atext ={ptext}/>
     </>
   )
}
export default Child;