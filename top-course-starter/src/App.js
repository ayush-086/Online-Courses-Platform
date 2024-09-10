// import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { apiUrl, filterData } from "./data";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App = () => {

  const[loading, setLoading] = useState(true);
  const [courses,setCourses] = useState(-1);
  const [category, setCategory] = useState(filterData[0].title);
  // const [courses,setCourses] = useState([]);
  // [] or any integer



  // Here first null but output.data and setcourses will mount items in the courses variable.


  useEffect(()=>{
    setLoading(true);
    const fetchData = async()=>{
      try{
        const res  = await fetch(apiUrl);
        const output = await res.json();
        console.log(output);
        setCourses(output.data);

      }
      catch(error){
        toast.error('Something went Wrong');
      }
      setLoading(false);
    }
    fetchData();
  },[ ]);

 
  return (
  <div className="min-h-screen flex flex-col bg-bgDark2">
   
   <Navbar />
   <Filter className="bg-bgDark2"
    filterData = {filterData}
    category={category}
    setCategory={setCategory}
   />
    s
      <div className="w-11/12 max-w-[1200px] 
      mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {loading? (<Spinner/>) : <Cards courses = {courses}/>} 
      </div>

  </div>
)};

export default App;
