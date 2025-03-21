import React, { useContext } from "react";
import { Mydata } from "./App";
import { Link } from "react-router-dom";

const Studentlist = () => {
  let data = useContext(Mydata);
  return (
    <div className="list ">
     <div style={{fontFamily:"cursive"}} className="  p-10 absolute bg-red-500 text-white h-50 md:w-100 text-center rounded-3xl ">
     {data ? (
        <div >
          <h1 className="mt-5 font-bold">ST NAME:        {data.sname}</h1>
          <h1 className="mt-4 font-bold">ST GRADE:        {data.sgrade}</h1>
        </div>
      ) : (
        <h1 className="lg:mt-15 font-bold">No student data available</h1>
      )}
      
   
     </div>
     <Link to="/reg" >
 <button className=" mt-30 left-30 lg:left-160 absolute hover:text-white bg-green-400 p-4 text-black font-bold rounded-xl hover:bg-red-800"> GO TO REGISTER</button>
</Link>
    </div>
  );
};

export default Studentlist;