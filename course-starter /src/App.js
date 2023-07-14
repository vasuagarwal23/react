import React,{useState,useEffect} from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData } from "./data";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from "./components/Spinner";
const App = () => {
  // if we are intializing courses with null then we have to add a loader in our and ui and logic 
  //if we are usinh empty array then we don't have add a loader
const[courses,setCourses]=useState(null);
const[loading,setLoading]=useState(true);


  async function fetchdata()
  { setLoading(true);
    try{
      let response=await fetch(apiUrl);
      let output=await response.json();
      setCourses(output.data);
    }
    catch(error)
    {
      toast.error("Data can't be fetch");
    }
    setLoading(false);
  }
useEffect(()=>{
  fetchdata();
},[]);
  
  return <div>
  <div>
  <Navbar/>
  </div>  
  <div>
    <Filter filterData={filterData}/>
  </div>
  <div>
   { loading ? (<Spinner/>) : (<Cards courses={courses}/>)}
  </div>
  </div>;
};

export default App;
