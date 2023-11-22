
import './App.css';


import React, { Component } from "react";
import "./App.css";
import Profile from "./Components/Profile";
import Timer from './components/Timer';


class App extends Component {
  constructor() {
    super(),
    this.state = {
      fullName: "khaled gbibia",
      Bio: "1983",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGrXB8jM7Sdicev8vsGSDFBgPb9ABbyFJDkscCKHjnGoMbrdi7-nXxMDJAx-QyxwGYlQQ&usqp=CAU",
      Profession: "Manager",
      show: false,
    };
  }
  showProfile = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <div className="App">
        {this.state.show && (
          <Profile
            fullName={this.state.fullName}
            desc={`${this.state.Bio}, and he is a ${this.state.Profession}`}
            ProfileImage={this.state.imageSrc}
          />
        )}

        <button onClick={this.showProfile}>
          {this.state.show ? "Hide Profile" : "Show Profile"}
        </button>
        <div style={{ marginTop: "70px" }}>
          <Timer />
        </div>
      </div>
    );
  }
}



export default App;
