import React from 'react'
// 1st way
// const Button=()=>(
//     <div>
//         <button className="btn">App Store</button>
//         <button className="btn">Play Store</button>
//     </div>
// );
// 2nd way
const Button = ({title="NOTHING"}) => (
    <div>
        <button className="btn">{title}</button>
    </div>
);
export default Button;