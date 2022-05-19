//부모->자식 데이터 전달 방법 : props를 사용한다.
//props를 이용한 데이터 전달은 자식->부모는 불가능하다.
//자식->부모 데이터 전달 방법 : 함수를 사용한다.
//부모가 props로 함수를 전달하면 자식이 받아서 파라미터로 데이터를 넣고 호출한다.

import "./App.css";
import Cont from "./component/cont";
import Cart from "./component/cartList";
import { useState } from "react";
import Child from "./component/child";
import Parent from "./component/parent";




function App() {
  // let post = 'React Study'
  // let [글제목, 글제목변경] = useState(['Lorem Ipsum 1', 'Lorem Ipsum 2', 'Lorem Ipsum 3']);
  // let [good, goodedit] = useState(0);
  // let [english, change] = useState('false');
  // let [name, setName] = useState('Annie');
  // let [nameTo, setNameTo] = useState('Danny');

  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const onSubmit = () => {
  //   alert('submitted');
  // };

  // const abc = () => {
  //   change('true');
  // }

  // function titedit() {
  //   var newArray = [...글제목];
  //   newArray[1] = 'LOREM IPSUM 2';
  //   글제목변경( newArray );
  // }

  // function name2() {
  //   setNameTo(nameTo === 'Danny' ? 'Kenneth' : nameTo === 'Kenneth' ? 'Nick' : nameTo === 'Nick' ? 'Danny' : nameTo);
  // }
  // const person = {
  //   name: "ABC",
  //   age: 100


  const [cartItems, setCartItems] = useState([]);

  //버튼 이벤트
  const inCart1 = (e) => {
    let newItems = cartItems.slice(); //cartItems 복사해서 가져옴 [...cartItems]와 동일
    newItems.push(e); //useState 배열에 내용 추가
    setCartItems(newItems); //setCartItems는 newItems이다.
    console.log("in my cart", newItems);
    alert("put it in my cart.");
  };

  const removeCart = () => {
    let revItems = cartItems.slice();
    revItems.pop();
    setCartItems(revItems);
  };

  

  return (
    <div className="sale">


<Parent />
<br />















      <div className="itemWrap">
        <div className="items">
          <Cont
            sub="A"
            main="The standard Lorem"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            image="images/img1.jpg"
            inCart__2={inCart1}
            //cont.js의 Cont 컴포넌트에 ===>> App.js의 inCart1 이벤트를 적용함.
            //자식 cont.js에서 만든 props를 부모 APP.js와 연결해서 데이터 전달.
            //컴포넌트를 import로 연결해서 사용하는 것처럼.
          />
          <Cont
            sub="B"
            main="written by Cicero"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            image="images/img2.jpg"
            inCart__2={inCart1}
          />
          <Cont
            sub="B"
            main="1914 translation"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            image="images/img3.jpg"
            inCart__2={inCart1}
          />
        </div>
        <div className="cart">
          <h3 style={{ margin: "20px 0" }}>MY CART LIST</h3>
          <div className="cart_list">
            {cartItems.map((item, i) => (
              <Cart key={i} image="images/img1.jpg" removeCart={removeCart} />
            ))}
          </div>
        </div>
      </div>
    </div>

    //   <div className="App">
    //   <div className="black-nav">

    //     <Box color="red" />
    //     <Box color="green" />

    // <button onClick={abc}>TEXT</button> {english}
    // <button onClick={() => {change('true');}}>2222</button>
    // <button onClick={() => { setName(name === 'Kate' ? 'Joy' : name === 'Annie' ? 'Kate' : name === 'Joy' ? 'Annie' : name); }}> NAME </button> {name}
    // <button onClick={name2}>NAME2</button> {nameTo}

    //       <h4 id={post} style={ {color : 'yellow'} }>리액트</h4>
    //     </div>

    //     <div className="contents1">
    //       <h4>{ post }</h4>
    //         <div className="list">
    //           <h4>{ 글제목[0] } <span onClick={()=>{ goodedit(good+1) }}>👍</span> { good } </h4>
    //           <p>Lorem Ipsum is simply dummy text of
    //             the printing and typesetting industry.</p>
    //         </div>
    //         <div className="list">
    //           <h4><span onClick={ titedit }>{ 글제목[1] }</span></h4>
    //           <p>Lorem Ipsum is simply dummy text of
    //             the printing and typesetting industry.</p>
    //         </div>
    //         <div className="list">
    //           <h4>{ 글제목[2] }</h4>
    //           <p>Lorem Ipsum is simply dummy text of
    //             the printing and typesetting industry.</p>
    //         </div>
    //     </div>

    //     <div className="contents2" style={{backgroundColor:'yellow', height:'100px'}}>

    //       <form onSubmit={onSubmit}>
    //         <input
    //         placeholder='username'
    //         value={username}
    //         onChange={(e) => setUsername(e.target.value)}
    //         /><br />

    //         <input
    //         placeholder='password'
    //         value={password}
    //         onChange={(e) => {
    //            setPassword(e.target.value)
    //         } }
    //         /> <br />
    //         <button type='submit'>Login</button>
    //       </form>
    //     </div>
    //   </div>
  );
}

export default App;
