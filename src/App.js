import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const friendName=['rahul','ratul','rishad','rifat','zain'];
  const productCost=[{
    product:"PhotoShop",
    price:"$200"
  },
  {
    product:"Adobe Reader",
    price:"$200"
  },
  {
    product:"Primer Pro",
    price:"$200"
  },
  {
    product:"Primer Ultra",
    price:"$200"
  },
  
]
const product = productCost.map(pro => pro.product);
console.log(product);
  return (
    <div className="App">
      <header className="App-header">
        <User></User>
        <Counter></Counter>
        <ul>
          {
            friendName.map(nam => <li>{nam}</li>)
          }
        </ul>
        {
          productCost.map(pro => <Product name={pro.product} price={pro.price}></Product>)
        }
        
        <p>i am a React person</p>
      </header>
    </div>
  );
}
function Person(props) {
  const PersonStyle={
    border:'2px solid red',
    margin:'10px'
  }
  console.log(props);
  return(
    <div style={PersonStyle}>
      <h1>hello {props.name}</h1>
      <p>MY Age {props.age}</p>
    </div>

  )
}
function Product(props) {
  const productStyle={
    border:'2px solid gold',
    padding: '10px'
  }
  return(
    <div style={productStyle}>
      <h3>{props.name}</h3>
      <p>Price{props.price}</p>
    </div>
  )
  
}
function Counter() {
  const [count,setCount] = useState(10);
  const handleIncrease = () => {
    const newCount = count+1;
    setCount(newCount);
  };
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
    </div>
  )
}
function User() {
  const [user,setUsers] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res =>res.json())
    .then(data =>setUsers(data));
  },[])

  return(
    <div>
      <h3>Dynamic userS: {user.length}</h3>
      <ul>
        {
          user.map(users => <li>{users.name}</li>)
        }
      </ul>
    </div>
  )
}
export default App;
