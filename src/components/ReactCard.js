import React from "react";


export default function ReactCard(props) {
  return <div className = "card">
     
      <h2>{props.value.name}</h2>
      <img className = "cardimg" src={props.value.avatar_url}/>
      <p className = "login">{props.value.login}</p>
      <p>{props.value.followers}</p>
    
    </div>
}