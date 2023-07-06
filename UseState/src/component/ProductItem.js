import React,{useState} from "react";
// what is useState?
//useState is a react hook,where hook is something that have utility function through those function we can do something
//state change take place on the basis of is component-instance. 
import "./ProductItem.css"
import ProductDate from "./ProductDate";
import Card from "./Card";


function ProductItem(props){
    // The use of const in this context is not related to preventing the value of title from being changed.
    // Instead, it is used to declare the state variable and its corresponding setter function as constants within the functional component.
    //  It ensures that the reference to the state variable (title) and the setter function (setTitle) remains unchanged throughout the component's lifecycle.
    const[title,setTitle]=useState(props.title);
    //The setTitle function returned by the useState hook is not immediate. 
    // When you call setTitle to update the state variable, the re-rendering of the component and the actual update of the state may not happen immediately.
    const clickHandler=()=>{

        setTitle('popcorn');
        // title='popcorn';(variable ki value change hui prr ui pai koi fharak nhi padega(no update))
        // console.log("button clicked") 
    }
    return(
        <Card className="product-item">
            <ProductDate date={props.date}/>
            <div className="product-item__description"> 
                <h2>{title}</h2> 
            </div>
            <button onClick={clickHandler}>Add to cart</button>
{/* //if we put () after clickHander then it will generate automatic 
 //function call that's why we don't use () after function name in props. */}
        </Card>
    );
}
export default ProductItem;