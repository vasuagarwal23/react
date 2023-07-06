//Here App is not a regular function
//it's a component that's need to render
//so here App will consider as an element.
import React from 'react';
import  ReactDOM  from 'react-dom';
import "./style.css";
import App from "./App.js"
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// JSX stands for JavaScript XML.
// JSX allows us to write HTML in React.
// JSX makes it easier to write and add HTML in React.
// JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()
// and / or appendChild() methods.
// JSX converts HTML tags into react elements.
//example(with JSX)

// const myElement = <h1>I Love JSX!</h1>;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);

//example(without JSX)

// const myElement = React.createElement('h1', {}, 'I do not use JSX!');
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    // in JSX class is replace with className
    //from function we can just return one element
    //that's why we have to put h1 and button into a div which act as parent element.
    //(JSX expression must have only one parent element)

// const App=()=> {
//     return (
//         <div>
//             <h1 style={{ textAlign: 'center' }}>Hello World!!</h1>
//             <button className="btn">Heyyyy</button>
//         </div>
//     );
// };
ReactDOM.render(<App/>,document.getElementById('root'));

//property of props are simple way of passing information from one component to another componet