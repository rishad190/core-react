import logo from './logo.svg';
import './App.css';

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
export default App;
