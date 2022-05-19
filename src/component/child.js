// import React from 'react';

// /*number는 props다.*/
// const Child = ({ number }) => {
//   return (
//     <div>
//       <p>여기는 child입니다 : {number}</p>
//     </div>
//   )
// }

// export default Child;


import React from 'react'

const Child = ({ number, getData }) => {

  const onClick = () => {
    console.log(number);
    getData(number + 1);
  }

  return (
    <div>
      <button onClick={onClick}>+</button>
    </div>
  )
}

export default Child;