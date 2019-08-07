import React from "react";
import CardList from "./CardList";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {},
      followers: []
    };
    console.log(this.state);
  }

  componentDidMount() {
    this.fetchData();
    this.fetchFollowers();
  }
  componentDidUpdate() {
    console.log();
  }

  fetchData = response => {
    fetch("https://api.github.com/users/Artyk77")
      .then(response => {
        console.log("response", response);
        return response.json();
      })
      .then(card => {
        console.log(card);
        this.setState({ data: card });
      })
      .catch(err => console.log("error"));
  };


  fetchFollowers = response => {
    fetch("https://api.github.com/users/Artyk77/followers")
      .then(response => {
        return response.json();
      })
      .then(follower => {
        console.log(follower);
        this.setState({ followers: follower });
      })
      .catch(err => console.log("error"));
  };

  render() {
    console.log("data", this.state.data);
    return (
      <div className="App">
         <h1 className="welcome">Welcome to Artyk's Github Cards</h1>
        <CardList
          dataProp={this.state.data}
          followerProp={this.state.followers}
        />
      </div>
    );
  }
}

export default App;
