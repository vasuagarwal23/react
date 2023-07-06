import logo from './logo.svg';
import './App.css';
import Item from './component/Item';
import Itemdate from './component/Itemdate';

function App() {
  const data = [
    {
      name:"nirma",
      date:20,
      month:"june",
      year:1998
    },
    {
      name:"sunana",
        date:21,
      month:"july",
        year:1999
    },
    {
      name:555,
      date:23,
      month:'jan',
      year:2003
    }
    ]
  return (
    // <div>
    //   <Item />
    //   <Itemdate/>
    //   <Item />
    //   <Itemdate />
    //   <Item />
    //   <Itemdate />
    //   <h1 className='hello'>hello jee</h1>
    // </div>


    //using props

    // <div>
    //   <Item name="nirma"></Item>
    //   <Itemdate date="20" month="june" year="1998" />
    //   <Item name="sunane" ></Item>
    //   <Itemdate date="21" month="july" year="2000" />
    //   <Item name="555" ></Item >
    //   <Itemdate date="22" month="august" year="2010" />
    //   <h1 className='hello'>hello jee</h1>
    // </div>

    //using array of objects

    <div>
      <Item name={data[0].name}></Item>
      <Itemdate date={data[0].date} month={data[0].month} year={data[0].year} />
      <Item name={data[1].name}></Item>
      <Itemdate date={data[1].date} month={data[1].month} year={data[1].year} />
      <Item name={data[2].name}></Item>
      <Itemdate date={data[2].date} month={data[2].month} year={data[2].year} />
      <h1 className='hello'>hello jee</h1>
    </div>

    
    
  );
}

export default App;
