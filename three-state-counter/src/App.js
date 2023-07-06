import React,{useState} from 'react' //state declaration
import "./App.css"

function App()
{ 

  const [count,setCount]=useState(0);
  // useState(0);
  // value that we have pass inside useState() can be
  //a string,a Boolean value or we can also give default value
  //example:
  //useState(0);//integer
  //useState(true);//boolean
  //useState(false);//boolean
  //useState("vasu");//string
  //useState(
  // name:"vasu"
  // email:"gmail.com"
  // );
  // return(
  //   <div className='App'>
  //     <header>
  //     <h1> Counter app using State/Hooks</h1>
  //     </header>
  //     <h2>Current value of count is {count}</h2>
  //     <button onClick={()=>setCount(0)}>RESET BUTTON</button>
  //     <button onClick={()=>setCount(count+1)} >COUNTER INCREMENT BUTTON</button>
  //     <button onClick={()=>setCount(count-1)}>COUNTER DECREMENT BUTTON</button>
  //   </div>
  // );

//if we want to set certain range then we have to use if else or ternary operator
  return (
    <div className='App'>
      <header>
        <h1> Counter app using State/Hooks</h1>
      </header>
      <h2>Current value of count is {count}</h2>
      <button onClick={() => setCount(0)}>RESET BUTTON</button>
      <button onClick={() => count>=10 ?setCount("OUT OF RANGE"):setCount(count+1)}>COUNTER INCREMENT BUTTON</button>
      <button onClick={function Counter(){
        // setCount(count+1);
        if(count<=0)
        {
          setCount("Out of Range");
        }
        else
        {
          setCount(count-1);
        }
      }}>COUNTER DECREMENT BUTTON</button>
    </div>
  );
} 
//if we want to set certain range then we have to use if else or ternary operator
export default App;
//remember one rule->never update any variable from the state directly or mutate directly.