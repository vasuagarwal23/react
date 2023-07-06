import React from 'react';
import NewProduct from './component/NewProduct';
import Product from "./component/Product";

function App() {
  const Products = [
    {
      id:'p1',
      title:'Nimra',
      amount:100,
      date:new Date(2021,8,10)
    },
    {
      id: 'p2',
      title: 'surf excel',
      amount: 200,
      date: new Date(2021, 9, 11)
    },
    {
      id: 'p3',
      title: 'rin',
      amount: 210,
      date: new Date(2020, 4, 7)
    },
    {
      id: 'p4',
      title: 'Tide',
      amount: 213,
      date: new Date(2023, 5, 2)
    }
  ]
  function printProductData(data) {
    console.log("i am inside APP.js")
    console.log(data)
  }
  return (
    <div>
      <NewProduct pranay={printProductData} />
      <Product items={Products}/>
    </div>
  );
}
export default App;
