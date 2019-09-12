import React, { useEffect, useState } from "react";
import axios from 'axios';
import "../index.css"
import ReactCard from "./ReactCard";

export default function ReactList() {

    const [user, setUser] = useState([]);
    useEffect(() => {
      
        axios
        .get("https://api.github.com/users/")
        .then(response => {
          console.log(response);
          setUser(response.data.results);
          
        })
        .catch(error => {
          console.log("Server Error", error);
        })
      }, []);
    
  return (
    <div>
    <section>
      
        {user.map (users => (

       <ReactCard user={users} />
       
        ))}
       
      
    
    </section>
    </div>
  );
}
