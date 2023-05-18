import React, { Component } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import Simpsons from "./components/Simpsons";
import "./App.css";

class App extends Component {
  state = {};

  async componentDidMount() {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=5`
    );
    this.setState({ simpsons: data });
  }

  render() {
    const { simpsons } = this.state;

    if (!simpsons) return <Loading />;

    return <Simpsons simpsons={simpsons} />;
  }
}

export default App;
