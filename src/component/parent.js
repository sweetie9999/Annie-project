// import React, { useState } from 'react';
// import Child from './child';

// const Parent = () => {
//   const [number, setNumber] = useState(0);

//   const onClick = () => {
//     setNumber(number + 1);
//   }

// /*number가 props다.*/
//   return (
//     <div>
//       <Child number={number}></Child>
//       <button onClick={onClick}>+</button>
//     </div>
//   )
// }

// export default Parent;


import React, { useState } from 'react'
import Child from './child';


function Parent() {
  const [number, setNumber] = useState(0)

  const getData = (number) => {
    setNumber(number);
  }

  return (
    <div>
      <p>여기는 부모입니다 : {number}</p>
      <Child number={number} getData={getData}></Child>
    </div>
  )
}

export default Parent;