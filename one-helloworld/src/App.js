import React from 'react';
// import "./style.css";
import Button from './Button.js';
//here we need to export our component so that render function can get element
//1st way
// export default function App() {
//     return (
//         <div>
//             <h1 style={{ textAlign: 'center' }}>Hello World!!</h1>
//             <button className="btn">Heyyyy</button>
//         </div>
//     );
// }
//2nd way
function App() {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Hello World!!</h1>
            {/* <button className="btn">App Store</button> */}
            {/* <button className="btn">Play Store</button> */}
            {/* <Button></Button> */}
            <Button title="Play store"/>
            <Button title="App store"/>
            <Button/>
           
        </div>
    );
}
export default App;