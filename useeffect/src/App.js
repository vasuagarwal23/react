
// useEffect->manage side effects.
//agar hum koi task(side effects) humare component ke render hone ke baad karwana
// chahte hai to hum uske liye useEffect ka use karte hai
//component mount means -> the component has been render 
//unmount->removing from DOM



import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const [text, setText] = useState(''); 
  //variation 1->Every render

  // useEffect(()=>{
  //   console.log('UI RENDERING DONE'); 
  // })


  //variation 2->First render

  // useEffect(() => {
  //   console.log('UI RENDERING DONE');
  // },[])


  // variation 3->first render+ whenever dependency changes
   
  useEffect(() => {
    console.log('Change observed');
  }, [text]) 

//variation 4-> to handle unmounting of a component   

  // useEffect(() => {
  //   console.log("listener added")
  //   return()=>{
  //     console.log('listener removed');
  //   }}, [text])
  

  function changeHandler(event){
    console.log(text);
    setText(event.target.value); //event.target.value is used to set the text value as whaterver we write in
    //the input field.
  }


  // const [windowSize, setWindowSize] = useState({ width: 2, height: 2 });

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowSize({
  //       width: window.innerWidth,
  //       height: window.innerHeight
  //     });
  //   };
  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //     console.log('ww');
  //   };
  // },[]);


  return (
    <div className="App">
      <input type="text" onChange={changeHandler}></input>
      <div>
        <h2>Window Size</h2>
        {/* <p>Width: {windowSize.width}px</p> */}
        {/* <p>Height: {windowSize.height}px</p> */}
      </div>
    </div>
  );
}

export default App;
