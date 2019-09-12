import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import axios from "axios";
import ReactCard from "./components/ReactCard";

class App extends React.Component {
    state = {
        username:"",
        followers: [],
        user: {}
    };
  
    componentDidMount() {
      fetch("https://api.github.com/users")
        .then(res => res.json())
        .then(user => this.setState({ username: user.data }))
        .catch(err => console.log("noooo: ", err));
    }
  
    componentDidUpdate(prevProps, prevState) {
      if (prevState.username !== this.state.username) {
        //console.log("index.js: App: CDU");
          fetch("https://api.github.com/users")
            .then(res => res.json())
            .then(follow => this.setState({ following: "", followers: follow.data }))
            .catch(err => console.log("noooo: ", err));
        }
      }
    
  
    handleChange = event => {
      this.setState({ username: event.target.value });
    };
  
    handleClick = event => {
      event.preventDefault();
      axios.get(`https://api.github.com/users/${this.state.username}`)
      .then( user => this.setState({user: user.data}))
     axios.get(`https://api.github.com/users/${this.state.username}/followers`)
      .then ( followers => this.setState({followers: followers.data}))
   .catch (err => {
    console.log(err.message);
  })
}
    //   fetch(`https://api.github.com/users/${this.state.username}`)
    // //     .then(res => res.json())
    // //     .then(user => this.setState({ username: user.data }))
    // //     .catch(err => console.log("noooo: ", err));
    // // };
  
    render() {
      //console.log("bk: index.js: App: render: this.state: ", this.state);
      return (
        <div className="App">
          <h1 className = "header">React Github UserCard</h1>
          <input className = "input"
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <button className = "button" onClick={this.handleClick}>Git Hub User</button>
          <ReactCard value={this.state.user}/>
       </div> 
      );
    }
}
  
  
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App />,  rootElement);
  
